import run from '../../../maintainability'

import bulkTest from '../../../lib/bulk-test'

const opts = {
  includeBooleans: false
}

describe("Maintainability of multiple files", () => {
  test("Load all files in the codebase and benchmark against data", () => {
    const [results, data] = bulkTest(run, __dirname, opts)
    expect(results).toEqual(data)
  });
});





