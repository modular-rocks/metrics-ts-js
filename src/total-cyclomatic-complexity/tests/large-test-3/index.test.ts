import code from './code'
import run from '../..'
const opts = {
  code
}

describe("Total Cyclomatic Complexity", () => {
  test("test 3", () => {
    const expected = 12
    expect(run(opts)).toEqual(expected);
  });
});




