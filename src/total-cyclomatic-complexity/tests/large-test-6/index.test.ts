import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Total Cyclomatic Complexity', () => {
  test('test 6', () => {
    const expected = 15;
    expect(run(opts)).toEqual(expected);
  });
});
