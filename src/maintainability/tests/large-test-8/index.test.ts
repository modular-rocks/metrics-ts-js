import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Maintainability', () => {
  test('test 8', () => {
    const expected = 66.43642970698122;

    expect(run(opts)).toEqual(expected);
  });
});
