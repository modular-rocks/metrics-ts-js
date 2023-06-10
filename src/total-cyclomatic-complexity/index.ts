import parser from '../lib/parser';

const Traverse = require('@babel/traverse');

export default (opts: Opts) => {
  const ast = parser(opts);

  let complexity = 0;
  Traverse.default(ast, {
    'IfStatement|SwitchCase|ConditionalExpression|WhileStatement|ForStatement|DoWhileStatement|ForOfStatement|ForInStatement|TryStatement|CatchClause':
      function () {
        complexity++;
      },
    'FunctionDeclaration|FunctionExpression|ArrowFunctionExpression|ObjectMethod|ClassMethod': function () {
      complexity++;
    },
    LogicalExpression(path: ASTNode) {
      if (path.node.operator === '&&' || path.node.operator === '||') {
        complexity++;
      }
    },
    CatchClause(path: ASTNode) {
      if (path.node.body.body.length > 0) {
        complexity++;
      }
    },
    BooleanLiteral() {
      if (opts.includeBooleans) complexity++;
    },
    AssignmentExpression(path: ASTNode) {
      if (path.node.operator === '??') complexity++;
    },
    'AssignmentPattern|ObjectPattern|ArrayPattern': () => {
      complexity++;
    },
  });

  return complexity;
};
