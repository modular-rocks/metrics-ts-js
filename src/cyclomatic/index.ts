import Traverse from '@babel/traverse';
import parser from '../lib/parser';

export default (opts: Opts) => {
  const ast = parser(opts);

  let complexity = 0;

  const visitor = {
    'IfStatement|SwitchCase|ConditionalExpression|WhileStatement|ForStatement|DoWhileStatement|ForOfStatement|ForInStatement|TryStatement':
      () => {
        complexity += 1;
      },
    'FunctionDeclaration|FunctionExpression|ArrowFunctionExpression|ObjectMethod|ClassMethod': function x(
      path: ASTNode
    ) {
      complexity += 1;
      /* eslint-disable @typescript-eslint/no-use-before-define */
      // TODO: This must be fixed!
      path.traverse(innerVisitor);
      /* eslint-enable @typescript-eslint/no-use-before-define */
    },
    CatchClause(path: ASTNode) {
      if (path.node.body.body.length > 0) {
        complexity += 1;
      }
    },
    LogicalExpression() {
      complexity += 1;
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
  };

  const innerVisitor = { ...visitor };
  delete (innerVisitor as any).FunctionDeclaration;
  delete (innerVisitor as any).ArrowFunctionExpression;
  delete (innerVisitor as any).FunctionExpression;
  delete (innerVisitor as any).ClassMethod;

  Traverse(ast, visitor);

  return complexity;
};
