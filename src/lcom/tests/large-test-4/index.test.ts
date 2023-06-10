import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lcom', () => {
  test('test 4', () => {
    const expected = {
      cohesion: 2.358974358974359,
      lcom: 1.6923076923076923,
    };

    expect(run(opts)).toEqual(expected);
  });
});
