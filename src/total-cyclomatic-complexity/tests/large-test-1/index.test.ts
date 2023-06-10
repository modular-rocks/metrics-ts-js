import code from './code';
import run from '../..';

import parser from '../../../lib/parser';

describe('Total Cyclomatic Complexity', () => {
  test('Test 1', () => {
    const expected = 40;
    const ast = parser({ code });
    expect(run({ ast })).toEqual(expected);
  });
});
