import code from './code'
import run from '../../../maintainability'
const opts = {
  code
}

describe("Maintainability", () => {
  test("test 5", () => {
    const expected = 77.95707538508954

    expect(run(opts)).toEqual(expected);
  });
});




