import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lcom', () => {
  test('test 6', () => {
    const expected = {
      cohesion: 1.55,
      lcom: 1.35,
    };

    expect(run(opts)).toEqual(expected);
  });
});
