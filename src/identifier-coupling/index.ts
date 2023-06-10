import Traverse from '@babel/traverse';
import parser from '../lib/parser';

export default (opts: Opts) => {
  const ast = parser(opts);

  const identifierToScopeMap = new Map();
  const scopes = new Set();

  Traverse(ast, {
    Identifier(path: ASTNode) {
      const binding = path.scope.getBinding(path.node.name);
      if (binding) {
        if (!identifierToScopeMap.has(binding)) {
          identifierToScopeMap.set(binding, new Set());
        }
        identifierToScopeMap.get(binding).add(path.scope.uid);
        scopes.add(path.scope.uid);
      }
    },
  });

  let sharedIdentifierCount = 0;

  /* eslint-disable no-restricted-syntax */
  for (const scopeSet of identifierToScopeMap.values()) {
    if (scopeSet.size > 1) {
      sharedIdentifierCount += 1;
    }
  }
  /* eslint-enable no-restricted-syntax */

  if (scopes.size === 0) {
    return 0;
  }

  const coupling = sharedIdentifierCount / scopes.size;
  return coupling;
};
