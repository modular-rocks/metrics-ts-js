import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Identifier coupling', () => {
  test('test 4', () => {
    const expected = 1.8387096774193548;

    expect(run(opts)).toEqual(expected);
  });
});
