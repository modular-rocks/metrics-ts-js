import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Total Cyclomatic Complexity', () => {
  test('test 4', () => {
    const expected = 52;
    expect(run(opts)).toEqual(expected);
  });
});
