import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lcom', () => {
  test('test 8', () => {
    const expected = {
      cohesion: 1.7,
      lcom: 0.7,
    };

    expect(run(opts)).toEqual(expected);
  });
});
