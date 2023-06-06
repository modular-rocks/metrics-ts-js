import run from '../../../loc'

import bulkTest from '../../../lib/bulk-test'

const opts = {}

describe("Lines of code for multiple files", () => {
  test("Load all files in the codebase and benchmark against data", () => {
    const [results, data] = bulkTest(run, __dirname, opts)
    // const fs = require('fs')
    // const {resolve} = require('path')
    // fs.createWriteStream(resolve(__dirname, 'data.json')).write(JSON.stringify(results))
    expect(results).toEqual(data)
  });
});
