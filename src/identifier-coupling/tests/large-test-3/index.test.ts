import code from './code'
import run from '../../../identifier-coupling'
const opts = {
  code
}


describe("Identifier coupling", () => {
  test("test 3", () => {
    const expected = 3.5

    expect(run(opts)).toEqual(expected);
  });
});




