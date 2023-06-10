import { resolve } from 'path';
import { createWriteStream } from 'fs';

export default (dirname: string, data: any[][]) => {
  createWriteStream(resolve(dirname, 'data.json')).write(JSON.stringify(data));
};
