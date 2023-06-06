const Traverse = require("@babel/traverse")
import parser from "../lib/parser";

export default (opts: Opts) => {
  const ast = parser(opts);

  let complexity = 0;
  Traverse.default(ast, {
    'IfStatement|SwitchCase|ConditionalExpression|WhileStatement|ForStatement|DoWhileStatement|ForOfStatement|ForInStatement|TryStatement|CatchClause'() {
      complexity++;
    },
    'FunctionDeclaration|FunctionExpression|ArrowFunctionExpression|ObjectMethod|ClassMethod'() {
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
    }
  });

  return complexity;
};





