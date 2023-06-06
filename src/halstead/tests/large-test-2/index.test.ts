import code from './code'
import run from '../../../halstead'
const opts = {
  code
}

describe("Halstead 2", () => {
  test("", () => {
    const expected = {  
      "bugs": 1.2141748119246347,
      "difficulty": 61.21025641025641,
      "effort": 219838.47911476088,
      "length": 448,
      "time": 12213.248839708938,
      "vocabulary": 259,
      "volume": 3591.5301128835763,
    }

    expect(run(opts)).toEqual(expected);
  });
});




