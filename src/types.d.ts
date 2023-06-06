declare module '@modular-rocks/metrics'

import { ASTNode } from '@babel/types'

declare global {
  interface Opts {
    includeBooleans?: Boolean,
    ast?: ASTNode,
    code?: string,
    limit?: number,
    measureDependenciesOfDependencies?: Boolean,
    totalModulesCount?: number,
  }
  
  type ASTNode = typeof ASTNode
}
