import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lines of code', () => {
  test('Test 7', () => {
    const expected = 17;

    expect(run(opts)).toEqual(expected);
  });
});
