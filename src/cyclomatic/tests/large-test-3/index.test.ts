import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Cyclomatic', () => {
  test('test 3', () => {
    const expected = 23;

    expect(run(opts)).toEqual(expected);
  });
});
