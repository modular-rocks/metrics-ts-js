import code from './code'
import run from '../../../maintainability'
const opts = {
  code
}

describe("Maintainability", () => {
  test("test 6", () => {
    const expected = 57.03323465832958

    expect(run(opts)).toEqual(expected);
  });
});




