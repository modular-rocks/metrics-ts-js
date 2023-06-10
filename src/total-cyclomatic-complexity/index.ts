import Traverse from '@babel/traverse';
import parser from '../lib/parser';

export default (opts: Opts) => {
  const ast = parser(opts);

  let complexity = 0;
  Traverse(ast, {
    'IfStatement|SwitchCase|ConditionalExpression|WhileStatement|ForStatement|DoWhileStatement|ForOfStatement|ForInStatement|TryStatement|CatchClause':
      () => {
        complexity += 1;
      },
    'FunctionDeclaration|FunctionExpression|ArrowFunctionExpression|ObjectMethod|ClassMethod': () => {
      complexity += 1;
    },
    LogicalExpression(path: ASTNode) {
      if (path.node.operator === '&&' || path.node.operator === '||') {
        complexity += 1;
      }
    },
    CatchClause(path: ASTNode) {
      if (path.node.body.body.length > 0) {
        complexity += 1;
      }
    },
    BooleanLiteral() {
      if (opts.includeBooleans) complexity += 1;
    },
    AssignmentExpression(path: ASTNode) {
      if (path.node.operator === '??') complexity += 1;
    },
    'AssignmentPattern|ObjectPattern|ArrayPattern': () => {
      complexity += 1;
    },
  });

  return complexity;
};
