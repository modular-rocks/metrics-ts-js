import code from './code'
import run from '../../../halstead'
const opts = {
  code
}

describe("Halstead 4", () => {
  test("", () => {
    const expected = {  
      "bugs": 2.4334708154155544,
      "difficulty": 87.70538243626062,
      "effort": 623765.1332889452,
      "length": 809,
      "time": 34653.61851605251,
      "vocabulary": 443,
      "volume": 7112.05077684101,
    }

    expect(run(opts)).toEqual(expected);
  });
});




