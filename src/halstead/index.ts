import parser from '../lib/parser';

const Traverse = require('@babel/traverse');

const clean = (variable: number) => {
  if (isNaN(variable) || variable === Infinity || variable === -Infinity) {
    return 1;
  }
  return variable;
};

export default (opts: Opts) => {
  const ast = parser(opts);

  let n1 = 0;
  let n2 = 0;
  let N1 = 0;
  let N2 = 0;

  const operatorMap = new Map();
  const operandMap = new Map();

  const countOperator = (operator: ASTNode | string) => {
    if (!operatorMap.has(operator)) {
      n1++;
    }
    N1++;
    operatorMap.set(operator, (operatorMap.get(operator) || 0) + 1);
  };

  const countOperand = (operand: ASTNode | string) => {
    if (!operandMap.has(operand)) {
      n2++;
    }
    N2++;
    operandMap.set(operand, (operandMap.get(operand) || 0) + 1);
  };

  Traverse.default(ast, {
    BinaryExpression(path: ASTNode) {
      countOperator(path.node.operator);
      countOperand(path.node.left);
      countOperand(path.node.right);
    },
    UnaryExpression(path: ASTNode) {
      countOperator(path.node.operator);
      countOperand(path.node.argument);
    },
    LogicalExpression(path: ASTNode) {
      countOperator(path.node.operator);
      countOperand(path.node.left);
      countOperand(path.node.right);
    },
    ConditionalExpression(path: ASTNode) {
      countOperator('?');
      countOperator(':');
      countOperand(path.node.test);
      countOperand(path.node.consequent);
      countOperand(path.node.alternate);
    },
    AssignmentExpression(path: ASTNode) {
      countOperator(path.node.operator);
      countOperand(path.node.left);
      countOperand(path.node.right);
    },
    CallExpression(path: ASTNode) {
      const args = path.node.arguments;
      countOperator(path.node.callee);

      args.forEach((arg: ASTNode) => {
        countOperand(arg);
      });
    },
    VariableDeclaration(path: ASTNode) {
      const { declarations } = path.node;
      declarations.forEach((declaration: ASTNode) => {
        countOperator(declaration.id.name);
        if (declaration.init) {
          countOperand(declaration.init);
        }
      });
    },
    FunctionDeclaration(path: ASTNode) {
      if (path.node.id) {
        countOperator(path.node.id.name);
      }
    },
    Identifier(path: ASTNode) {
      countOperand(path.node.name);
    },
    Literal(path: ASTNode) {
      countOperand(path.node.value);
    },
  });

  // https://en.wikipedia.org/wiki/Halstead_complexity_measures

  const vocabulary = n1 + n2;
  const length = N1 + N2;
  const volume = length * Math.log2(vocabulary || 1);
  const difficulty = clean((n1 / 2) * (N2 / (n2 || 1)));
  const effort = clean(difficulty * volume);
  const bugs = clean(effort ** (2 / 3) / 3000);
  const time = clean(effort / 18);

  return { vocabulary, length, volume, difficulty, effort, bugs, time };
};
