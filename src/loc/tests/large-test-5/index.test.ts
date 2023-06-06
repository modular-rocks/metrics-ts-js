import code from './code'
import run from '../../../loc'
const opts = {
  code
}

describe("Lines of code", () => {
  test("Test 5", () => {
    const expected = 42

    expect(run(opts)).toEqual(expected);
  });
});




