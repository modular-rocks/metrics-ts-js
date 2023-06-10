import Traverse from '@babel/traverse';
import parser from '../lib/parser';

interface Imports {
  [name: string]: string;
}

export default (opts: Opts) => {
  const ast = parser(opts);
  const count = opts.limit || opts.totalModulesCount;

  if (!count) {
    throw Error('Please add options limit or totalModulesCount');
  }

  const imports: Imports = {};
  Traverse(ast, {
    ImportDeclaration(path: ASTNode) {
      const source = path.node.source.value;
      imports[source] = source;
    },
  });

  // Calculate the coupling score
  return Object.keys(imports).length / count;
};
