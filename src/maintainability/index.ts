import totalCyclomaticComplexity from "../total-cyclomatic-complexity"
import loc from '../loc'

export default (opts: Opts) => {
  const cyclomaticComplexity = totalCyclomaticComplexity(opts);
  const linesOfCode = loc(opts);

  // Constants for the maintainability index calculation
  const indexUpperLimit = 171;
  const volumeFactor = 5.2;
  const complexityFactor = 0.23;
  const effortFactor = 16.2;

  const logLinesOfCode = Math.log(linesOfCode);
  const logCyclomaticComplexity = Math.log(cyclomaticComplexity + 1);

  const rawMaintainabilityIndex = indexUpperLimit - volumeFactor * logLinesOfCode - complexityFactor * cyclomaticComplexity - effortFactor * logCyclomaticComplexity;

  // Convert to a scale from 0 to 100 and bound the values.
  const scaledMaintainabilityIndex = Math.max(0, Math.min(100, rawMaintainabilityIndex * 100 / indexUpperLimit));

  return scaledMaintainabilityIndex;
};




