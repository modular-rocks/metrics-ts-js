import Traverse from '@babel/traverse';
import parser from '../lib/parser';

export default (opts: Opts) => {
  const ast = parser(opts);

  const nodeBindingMap = new Map();

  Traverse(ast, {
    enter(path: ASTNode) {
      if (path.parent.type === 'Program') {
        if (!nodeBindingMap.has(path.node)) {
          nodeBindingMap.set(path.node, new Set());
        }
      }
    },
    Identifier(path: ASTNode) {
      const binding = path.scope.getBinding(path.node.name);
      if (binding) {
        let currentPath = path;
        while (currentPath.parent && currentPath.parent.type !== 'Program') {
          currentPath = currentPath.parentPath;
        }
        nodeBindingMap.get(currentPath.node).add(binding);
      }
    },
  });

  let sharedCount = 0;
  let unsharedCount = 0;

  /* eslint-disable no-restricted-syntax */
  for (const [nodeX, bindingsX] of nodeBindingMap.entries()) {
    for (const binding of bindingsX) {
      let shared = false;
      for (const [nodeY, bindingsY] of nodeBindingMap.entries()) {
        if (nodeX !== nodeY && bindingsY.has(binding)) {
          shared = true;
          break;
        }
      }
      if (shared) {
        sharedCount += 1;
      } else {
        unsharedCount += 1;
      }
    }
  }
  /* eslint-enable no-restricted-syntax */

  const cohesion = Math.max(0, sharedCount / nodeBindingMap.size);
  const lcom = Math.max(0, unsharedCount / nodeBindingMap.size);

  return {
    cohesion: Number.isNaN(cohesion) ? 0 : cohesion,
    lcom: Number.isNaN(lcom) ? 0 : lcom,
  };
};
