import code from './code'
import run from '../../../lcom'
const opts = {
  code
}


describe("Lcom", () => {
  test("test 3", () => {
    const expected = {
      "cohesion": 2, 
      "lcom": 1.3076923076923077
    }

    expect(run(opts)).toEqual(expected);
  });
});




