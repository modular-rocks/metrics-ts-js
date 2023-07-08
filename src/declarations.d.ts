declare module '@modular-rocks/metrics-ts-js';

interface ASTNode {
  [property: string]: any;
}
interface Opts {
  includeBooleans?: boolean;
  ast?: ASTNode;
  code?: string;
  limit?: number;
  measureDependenciesOfDependencies?: boolean;
  totalModulesCount?: number;
}
