import run from '../../../identifier-coupling'

const opts = {
}

import bulkTest from '../../../lib/bulk-test'

describe("Identifier coupling", () => {
  test("Load all files in the codebase and benchmark against data", () => {
    const [results, data] = bulkTest(run, __dirname, opts)
    expect(results).toEqual(data)
  });
});
