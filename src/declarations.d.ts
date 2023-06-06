declare module "@modular-rocks/metrics"

interface ASTNode {
  [property: string]: any
}
interface Opts {
  includeBooleans?: Boolean,
  ast?: ASTNode,
  code?: string,
  limit?: number,
  measureDependenciesOfDependencies?: Boolean,
  totalModulesCount?: number,
}  