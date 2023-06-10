import Traverse from '@babel/traverse';
import parser from '../lib/parser';

export default (opts: Opts) => {
  const ast = parser(opts);

  let linesOfCode = 0;
  Traverse(ast, {
    enter(path: ASTNode) {
      if (path.isProgram()) {
        const { start, end } = path.node.loc;
        linesOfCode += end.line - start.line + 1;
      }
    },
  });

  return linesOfCode;
};
