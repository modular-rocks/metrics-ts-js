import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Cyclomatic', () => {
  test('test 2', () => {
    const expected = 480;

    expect(run(opts)).toEqual(expected);
  });
});
