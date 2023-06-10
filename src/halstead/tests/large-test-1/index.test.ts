import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Halstead 1', () => {
  test('', () => {
    const expected = {
      bugs: 1.1953895937201144,
      difficulty: 67.71428571428571,
      effort: 214756.38671248747,
      length: 397,
      time: 11930.91037291597,
      vocabulary: 254,
      volume: 3171.5078206485496,
    };

    expect(run(opts)).toEqual(expected);
  });
});
