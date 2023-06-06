import code from './code'
import run from '../../../maintainability'
const opts = {
  code
}


describe("Maintainability", () => {
  test("test 3", () => {
    const expected = 60.7232074882026

    expect(run(opts)).toEqual(expected);
  });
});




