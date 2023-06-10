import code from './code';
import run from '../..';

const opts = {
  code,
  totalModulesCount: 603,
};

describe('Import coupling', () => {
  test('test 2', () => {
    const expected = 0.01824212271973466;

    expect(run(opts)).toEqual(expected);
  });
});
