import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Lines of code', () => {
  test('Test 4', () => {
    const expected = 303;

    expect(run(opts)).toEqual(expected);
  });
});
