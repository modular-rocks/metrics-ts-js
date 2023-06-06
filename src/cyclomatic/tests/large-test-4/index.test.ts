import code from './code'
import run from '../../../cyclomatic'
const opts = {
  code
}

describe("Cyclomatic", () => {
  test("test 4", () => {
    const expected = 105

    expect(run(opts)).toEqual(expected);
  });
});




