import run from '../../../import-coupling'

const opts = {
  totalModulesCount: 603
}

import bulkTest from '../../../lib/bulk-test'

describe("Import coupling for multiple files", () => {
  test("Load all files in the codebase and benchmark against data", () => {
    const [results, data] = bulkTest(run, __dirname, opts)
    expect(results).toEqual(data)
  });
});



