import code from './code'
import run from '../../../identifier-coupling'
const opts = {
  code
}

describe("Identifier coupling", () => {
  test("test 8", () => {
    const expected = 1

    expect(run(opts)).toEqual(expected);
  });
});




