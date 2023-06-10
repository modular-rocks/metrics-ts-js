import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lines of code', () => {
  test('Test 6', () => {
    const expected = 125;

    expect(run(opts)).toEqual(expected);
  });
});
