export const getPairWithSumClosestToZero = (arr: number[]) => {
  if (arr.length < 2) {
    throw new Error('Array must contain at least 2 numbers');
  }

  let minSum = Math.abs(arr[0] + arr[1]);
  let tempSum: number;
  const result = { firstElem: arr[0], secondElem: arr[1] };

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      tempSum = Math.abs(arr[i] + arr[j]);
      if (tempSum < minSum) {
        result.firstElem = arr[i];
        result.secondElem = arr[j];
        minSum = tempSum;
      }
    }
  }
  return result;
};

export const sum = (a: number, b: number) => {
  return a + b;
};

export const getSumOfPairClosestToZero = (arr: number[]) => {
  const pairWithSumClosestToZero = getPairWithSumClosestToZero(arr);

  const sumOfNbs = sum(
    pairWithSumClosestToZero.firstElem,
    pairWithSumClosestToZero.secondElem
  );
  return sumOfNbs;
};
