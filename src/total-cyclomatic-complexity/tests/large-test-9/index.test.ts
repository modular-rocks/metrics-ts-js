import code from './code'
import run from '../..'
const opts = {
  code
}

describe("Total Cyclomatic Complexity", () => {
  test("test 9", () => {
    const expected = 9
    expect(run(opts)).toEqual(expected);
  });
});




