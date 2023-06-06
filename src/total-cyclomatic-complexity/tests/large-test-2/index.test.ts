import code from './code'
import run from '../..'
const opts = {
  code
}

describe("Total Cyclomatic Complexity", () => {
  test("test 2", () => {
    const expected = 36
    expect(run(opts)).toEqual(expected);
  });
});




