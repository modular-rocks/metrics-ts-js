import code from './code'
import run from '../../../cyclomatic'
const opts = {
  code
}

describe("Cyclomatic", () => {
  test("test 7", () => {
    const expected = 3

    expect(run(opts)).toEqual(expected);
  });
});




