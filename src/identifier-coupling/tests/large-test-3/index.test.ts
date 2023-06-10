import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Identifier coupling', () => {
  test('test 3', () => {
    const expected = 3.5;

    expect(run(opts)).toEqual(expected);
  });
});
