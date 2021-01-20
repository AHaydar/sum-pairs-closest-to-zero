export const getPairWithSumClosestToZero = (arr: number[]) => {
  if (arr.length < 2) {
    throw new Error('Array must contain at least 2 numbers');
  }

  arr.sort((a, b) => Math.abs(b) - Math.abs(a));

  let x = 0;
  let y = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] + arr[i]) <= min) {
      min = Math.abs(arr[i - 1] + arr[i]);
      x = i - 1;
      y = i;
    }
  }
  return { firstElem: arr[x], secondElem: arr[y] };
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
