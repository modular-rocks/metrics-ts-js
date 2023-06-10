import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Halstead 7', () => {
  test('', () => {
    const expected = {
      bugs: 0.022432841569536562,
      difficulty: 3.090909090909091,
      effort: 552.0880105307536,
      length: 38,
      time: 30.671556140597424,
      vocabulary: 26,
      volume: 178.6167092893615,
    };

    expect(run(opts)).toEqual(expected);
  });
});
