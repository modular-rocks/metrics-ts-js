type BasicConfig = [string, string[], string[], Boolean];

export default (fullPath: string): BasicConfig => {
  return [
    fullPath,
    ['js', 'ts', 'tsx', 'jsx'], // extensions
    ['.d.ts', '.d.tsx'], // ignoredExtensions
    true, // ignoreTests
  ];
};
