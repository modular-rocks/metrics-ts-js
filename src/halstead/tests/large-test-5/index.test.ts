import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Halstead 5', () => {
  test('', () => {
    const expected = {
      bugs: 0.049339207275966954,
      difficulty: 4.725,
      effort: 1800.8192867234877,
      length: 69,
      time: 100.04551592908265,
      vocabulary: 46,
      volume: 381.1257749679339,
    };

    expect(run(opts)).toEqual(expected);
  });
});
