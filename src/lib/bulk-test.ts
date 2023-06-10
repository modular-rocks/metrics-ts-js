import { collect, read, resolve } from '@modular-rocks/traverse-files';
import basicConfig from './basic-config';

export type Result = [string, number];
export type CodeStore = [string, string];
const relativePath: string = '../../../../test-project/src/app/';

export default (run: Function, dirname: string, opts: Opts) => {
  const [fullpath, extensions, ignoredExtensions, ignoreTests] = basicConfig(resolve(dirname, relativePath));
  const fileNames: string[] = collect(fullpath, extensions, ignoredExtensions, ignoreTests);
  const files: CodeStore[] = fileNames.map((fullpath: string) => [fullpath, read(fullpath)]);
  const data: Result[] = JSON.parse(read(resolve(dirname, './data.json')));

  const results: Result[] = [];
  files.map((x: CodeStore) => {
    const [fullpath, code] = x;
    opts.code = code.toString();
    const result: Result = [fullpath.replace(process.cwd(), ''), run(opts)];
    results.push(result);
  });

  return [results, data];
};
