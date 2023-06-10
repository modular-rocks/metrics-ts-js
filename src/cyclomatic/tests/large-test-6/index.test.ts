import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Cyclomatic', () => {
  test('test 6', () => {
    const expected = 37;

    expect(run(opts)).toEqual(expected);
  });
});
