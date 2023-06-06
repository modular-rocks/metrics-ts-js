import code from './code'
import run from '../../../halstead'
const opts = {
  code
}


describe("Halstead 3", () => {
  test("", () => {
    const expected = {  
      "bugs": 0.47082565411241495,
      "difficulty": 31.166666666666668,
      "effort": 53085.02909637973,
      "length": 235,
      "time": 2949.1682831322073,
      "vocabulary": 152,
      "volume": 1703.2629656592426,
    }

    expect(run(opts)).toEqual(expected);
  });
});




