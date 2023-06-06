import code from './code'
import run from '../../../halstead'
const opts = {
  code
}

describe("Halstead 9", () => {
  test("", () => {
    const expected = {  
      "bugs": 0.21260680972851273,
      "difficulty": 18.860294117647058,
      "effort": 16108.223180867313,
      "length": 130,
      "time": 894.9012878259618,
      "vocabulary": 95,
      "volume": 854.0812290830232,
    }

    expect(run(opts)).toEqual(expected);
  });
});




