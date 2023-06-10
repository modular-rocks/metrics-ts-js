import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Cyclomatic', () => {
  test('test 7', () => {
    const expected = 3;

    expect(run(opts)).toEqual(expected);
  });
});
