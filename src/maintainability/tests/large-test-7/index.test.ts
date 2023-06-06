import code from './code'
import run from '../../../maintainability'
const opts = {
  code
}

describe("Maintainability", () => {
  test("test 7", () => {
    const expected = 80.70746873361654

    expect(run(opts)).toEqual(expected);
  });
});




