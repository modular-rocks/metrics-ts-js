import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Halstead 6', () => {
  test('', () => {
    const expected = {
      bugs: 0.7822153659386625,
      difficulty: 38.67708333333333,
      effort: 113676.684024876,
      length: 372,
      time: 6315.371334715333,
      vocabulary: 239,
      volume: 2939.1224525688385,
    };

    expect(run(opts)).toEqual(expected);
  });
});
