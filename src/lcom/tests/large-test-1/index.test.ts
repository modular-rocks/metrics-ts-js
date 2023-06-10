import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lcom', () => {
  test('test 1', () => {
    const expected = {
      cohesion: 2.857142857142857,
      lcom: 1.1904761904761905,
    };

    expect(run(opts)).toEqual(expected);
  });
});
