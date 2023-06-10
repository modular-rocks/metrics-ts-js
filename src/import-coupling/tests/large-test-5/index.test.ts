import code from './code';
import run from '../..';

const opts = {
  code,
  totalModulesCount: 603,
};

describe('Import coupling', () => {
  test('test 5', () => {
    const expected = 0.013266998341625208;

    expect(run(opts)).toEqual(expected);
  });
});
