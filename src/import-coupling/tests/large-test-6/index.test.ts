import code from './code'
import run from '../../../import-coupling'
const opts = {
  code,
  totalModulesCount: 603
}

describe("Import coupling", () => {
  test("test 6", () => {
    const expected = 0.029850746268656716

    expect(run(opts)).toEqual(expected);
  });
});




