import code from './code'
import run from '../../../import-coupling'
const opts = {
  code,
  totalModulesCount: 603
}

describe("Import coupling", () => {
  test("test 7", () => {
    const expected = 0.004975124378109453

    expect(run(opts)).toEqual(expected);
  });
});




