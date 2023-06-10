import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lcom', () => {
  test('test 2', () => {
    const expected = {
      cohesion: 2.3846153846153846,
      lcom: 3.4615384615384617,
    };

    expect(run(opts)).toEqual(expected);
  });
});
