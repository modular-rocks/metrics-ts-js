import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Identifier coupling', () => {
  test('test 5', () => {
    const expected = 3;

    expect(run(opts)).toEqual(expected);
  });
});
