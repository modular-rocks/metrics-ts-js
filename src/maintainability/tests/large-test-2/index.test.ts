import code from './code'
import run from '../../../maintainability'
const opts = {
  code
}

describe("Maintainability", () => {
  test("test 2", () => {
    const expected = 44.73274391238809

    expect(run(opts)).toEqual(expected);
  });
});




