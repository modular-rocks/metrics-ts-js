import code from './code'
import run from '../../../import-coupling'
const opts = {
  code,
  totalModulesCount: 603
}

describe("Import coupling", () => {
  test("test 4", () => {
    const expected = 0.04975124378109453

    expect(run(opts)).toEqual(expected);
  });
});




