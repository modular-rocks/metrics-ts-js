import run from '../../../lcom'

const opts = {
  
}

import bulkTest from '../../../lib/bulk-test'

describe("Lcom cohesion for multiple files", () => {
  test("Load all files in the codebase and benchmark against data", () => {
    const [results, data] = bulkTest(run, __dirname, opts)
    expect(results).toEqual(data)
  });
});





