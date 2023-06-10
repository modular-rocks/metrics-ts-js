import { collect, read, resolve } from '@modular-rocks/traverse-files';
import basicConfig from './basic-config';

export type Result = [string, number];
export type CodeStore = [string, string];
const relativePath: string = '../../../../test-project/src/app/';

export default (run: Function, dirname: string, opts: Opts) => {
  const [fullpath, extensions, ignoredExtensions, ignoreTests] = basicConfig(resolve(dirname, relativePath));
  const fileNames: string[] = collect(fullpath, extensions, ignoredExtensions, ignoreTests);
  const files: CodeStore[] = fileNames.map((fileFullPath: string) => [fileFullPath, read(fileFullPath)]);
  const data: Result[] = JSON.parse(read(resolve(dirname, './data.json')));
  const results: Result[] = [];

  files.forEach((x: CodeStore) => {
    const [fileFullPath, code] = x;
    const optsClone = { ...opts, code: code.toString() };
    const result: Result = [fileFullPath.replace(process.cwd(), ''), run(optsClone)];
    results.push(result);
  });

  return [results, data];
};
