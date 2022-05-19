{
  const memoized = () => {
    const memo = {};
    const factorial = (n: number): number => {
      if (n == 0 || n == 1) return 1;
      if (!(n in memo)) memo[n] = n * factorial(n - 1);
      return memo[n];
    };
    return factorial;
  };
}
