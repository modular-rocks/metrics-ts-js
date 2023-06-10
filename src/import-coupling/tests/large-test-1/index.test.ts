import code from './code';
import run from '../..';

const opts = {
  code,
  totalModulesCount: 603,
};

describe('Import coupling', () => {
  test('test 1', () => {
    const expected = 0.01990049751243781;

    expect(run(opts)).toEqual(expected);
  });
});
