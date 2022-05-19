const memo = {};
const factorial = (n: number): number => {
  if (n == 0 || n == 1) return 1;
  if (!memo[n]) memo[n] = n * factorial(n - 1);
  return memo[n];
};

const firstValue = 2;
factorial(firstValue);

const secondValue = 4;
factorial(secondValue);
