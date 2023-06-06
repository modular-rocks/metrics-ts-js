import code from './code'
import run from '../../../identifier-coupling'
const opts = {
  code
}

describe("Identifier coupling", () => {
  test("test 5", () => {
    const expected = 3

    expect(run(opts)).toEqual(expected);
  });
});




