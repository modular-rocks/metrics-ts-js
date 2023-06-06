import code from './code'
import run from '../..'
const opts = {
  code
}

describe("Total Cyclomatic Complexity", () => {
  test("test 5", () => {
    const expected = 2
    expect(run(opts)).toEqual(expected);
  });
});




