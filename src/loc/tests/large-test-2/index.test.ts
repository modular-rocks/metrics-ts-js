import code from './code'
import run from '../../../loc'
const opts = {
  code
}

describe("Lines of code", () => {
  test("Test 2", () => {
    const expected = 207

    expect(run(opts)).toEqual(expected);
  });
});




