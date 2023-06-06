import code from './code'
import run from '../../../identifier-coupling'
const opts = {
  code
}

describe("Identifier coupling", () => {
  test("test 6", () => {
    const expected = 2.5714285714285716

    expect(run(opts)).toEqual(expected);
  });
});




