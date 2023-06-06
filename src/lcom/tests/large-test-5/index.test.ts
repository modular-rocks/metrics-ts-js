import code from './code'
import run from '../../../lcom'
const opts = {
  code
}

describe("Lcom", () => {
  test("test 5", () => {
    const expected = {
      "cohesion": 1.4545454545454546, 
      "lcom": 0.5454545454545454
    }

    expect(run(opts)).toEqual(expected);
  });
});




