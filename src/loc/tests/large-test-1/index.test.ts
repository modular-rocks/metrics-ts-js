import code from './code'
import run from '../../../loc'

const opts = {
  code
}

describe("Lines of code", () => {
  test("Test 1", () => {
    const expected = 195

    expect(run(opts)).toEqual(expected);
  });
});