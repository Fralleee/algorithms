const memo = {};
const factorial = (n) => {
  if (n == 0 || n == 1) return 1;

  if (memo[n]) return memo[n];
  else memo[n] = n * factorial(n - 1);

  return memo[n];
};

const factorialNoMemo = (n) => {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
};

const firstValue = 2;
factorial(firstValue);

const secondValue = 4;
factorial(secondValue);
