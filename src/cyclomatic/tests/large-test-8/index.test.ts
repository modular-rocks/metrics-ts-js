import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Cyclomatic', () => {
  test('test 8', () => {
    const expected = 31;

    expect(run(opts)).toEqual(expected);
  });
});
