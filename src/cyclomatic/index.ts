const Traverse = require("@babel/traverse");
import parser from "../lib/parser";

export default (opts: Opts) => {
  const ast = parser(opts);

  let complexity = 0;

  const visitor = {
    'IfStatement|SwitchCase|ConditionalExpression|WhileStatement|ForStatement|DoWhileStatement|ForOfStatement|ForInStatement|TryStatement'() {
      complexity++;
    },
    'FunctionDeclaration|FunctionExpression|ArrowFunctionExpression|ObjectMethod|ClassMethod'(path: ASTNode) {
      complexity++;
      path.traverse(innerVisitor);
    },
    CatchClause(path: ASTNode) {
      if (path.node.body.body.length > 0) {
        complexity++;
      }
    },
    LogicalExpression() {
      complexity++;
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
  };

  const innerVisitor = { ...visitor };
  delete (innerVisitor as any).FunctionDeclaration;
  delete (innerVisitor as any).ArrowFunctionExpression;
  delete (innerVisitor as any).FunctionExpression;
  delete (innerVisitor as any).ClassMethod;

  Traverse.default(ast, visitor);

  return complexity;
}