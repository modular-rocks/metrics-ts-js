import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Maintainability', () => {
  test('test 1', () => {
    const expected = 43.40382152915715;

    expect(run(opts)).toEqual(expected);
  });
});
