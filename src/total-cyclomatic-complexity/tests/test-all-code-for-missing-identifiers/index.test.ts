import run from '../..';

import bulkTest from '../../../lib/bulk-test';

const opts = {
  includeBooleans: false,
};

describe('Total Cyclomatic Complexity of multiple files', () => {
  test('Load all files in the codebase and benchmark against data', () => {
    const [results, data] = bulkTest(run, __dirname, opts);
    expect(results).toEqual(data);
  });
});
