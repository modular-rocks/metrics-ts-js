import code from './code'
import run from '../../../identifier-coupling'

const opts = {
  code
}

describe("Identifier coupling", () => {
  test("test 1", () => {
    const expected = 1.1935483870967742

    expect(run(opts)).toEqual(expected);
  });
});




