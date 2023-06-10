import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lines of code', () => {
  test('Test 3', () => {
    const expected = 81;

    expect(run(opts)).toEqual(expected);
  });
});
