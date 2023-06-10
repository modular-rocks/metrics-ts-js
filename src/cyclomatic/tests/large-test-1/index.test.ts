import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Cyclomatic', () => {
  test('test 1', () => {
    const expected = 138;

    expect(run(opts)).toEqual(expected);
  });
});
