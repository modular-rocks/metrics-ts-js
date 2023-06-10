import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lines of code', () => {
  test('Test 9', () => {
    const expected = 32;

    expect(run(opts)).toEqual(expected);
  });
});
