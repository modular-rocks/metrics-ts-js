import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lcom', () => {
  test('test 7', () => {
    const expected = {
      cohesion: 1.5,
      lcom: 0.75,
    };

    expect(run(opts)).toEqual(expected);
  });
});
