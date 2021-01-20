import {
  getPairWithSumClosestToZero,
  sum,
  getSumOfPairClosestToZero,
} from '../index';

describe('getPairWithSumClosestToZero', () => {
  it('should return an object with the 2 elements that sum closest to zero', () => {
    const arr1 = [-8, -66, -60];
    const arr2 = [-21, -67, -37, -18, 4, -65];
    const arr3 = [10, 4, -7, 12, -9];
    const arr4 = [10, -10];
    const arr5 = [0, -10, 10];
    const arr6 = [-13, 0, 12, -11, 10];
    const arr7 = [-11, 0, 12, -13, 10];

    expect(getPairWithSumClosestToZero(arr1)).toEqual({
      firstElem: -60,
      secondElem: -8,
    });
    expect(getPairWithSumClosestToZero(arr2)).toEqual({
      firstElem: -18,
      secondElem: 4,
    });
    expect(getPairWithSumClosestToZero(arr3)).toEqual({
      firstElem: 10,
      secondElem: -9,
    });
    expect(getPairWithSumClosestToZero(arr4)).toEqual({
      firstElem: 10,
      secondElem: -10,
    });
    expect(getPairWithSumClosestToZero(arr5)).toEqual({
      firstElem: -10,
      secondElem: 10,
    });

    // when the sum of 2 pairs are equal the first pair will be picked as we're using a strict less than in the algorithm.
    expect(getPairWithSumClosestToZero(arr6)).toEqual({
      firstElem: -11,
      secondElem: 10,
    });
    expect(getPairWithSumClosestToZero(arr7)).toEqual({
      firstElem: -11,
      secondElem: 10,
    });
  });
  it('should throw an error', () => {
    const arr = [10];

    expect(() => getPairWithSumClosestToZero(arr)).toThrowError(
      'Array must contain at least 2 numbers'
    );
  });
});
describe('sum', () => {
  it('should return the sum of passed numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
describe('getSumOfPairClosestToZero', () => {
  it('should return the sum of 2 elements that sum closest to zero', () => {
    const arr1 = [-8, -66, -60];
    const arr2 = [-21, -67, -37, -18, 4, -65];
    const arr3 = [10, 4, -7, 12, -9];
    const arr4 = [10, -10];

    //Better through mocking the internally called functions and validating they've been mocked
    expect(getSumOfPairClosestToZero(arr1)).toEqual(-68);
    expect(getSumOfPairClosestToZero(arr2)).toEqual(-14);
    expect(getSumOfPairClosestToZero(arr3)).toEqual(1);
    expect(getSumOfPairClosestToZero(arr4)).toEqual(0);
  });

  it('should throw an error', () => {
    const arr = [10];

    expect(() => getSumOfPairClosestToZero(arr)).toThrowError(
      'Array must contain at least 2 numbers'
    );
  });
});
