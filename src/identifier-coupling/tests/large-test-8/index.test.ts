import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Identifier coupling', () => {
  test('test 8', () => {
    const expected = 1;

    expect(run(opts)).toEqual(expected);
  });
});
