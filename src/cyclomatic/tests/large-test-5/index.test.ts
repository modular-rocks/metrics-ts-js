import code from './code'
import run from '../../../cyclomatic'
const opts = {
  code
}

describe("Cyclomatic", () => {
  test("test 5", () => {
    const expected = 2

    expect(run(opts)).toEqual(expected);
  });
});




