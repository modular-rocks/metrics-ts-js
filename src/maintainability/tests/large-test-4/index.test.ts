import code from './code';
import run from '../..';

const opts = {
  code,
};

describe('Maintainability', () => {
  test('test 4', () => {
    const expected = 38.017462229126835;

    expect(run(opts)).toEqual(expected);
  });
});
