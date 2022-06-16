{
  const memoized = (fn: Function) => {
    const cache = {};
    return (...args) => {
      const value = args[0];
      if (!(value in cache)) cache[value] = fn(value);
      return cache[value];
    };
  };

  const factorial = memoized((n: number = 1): number => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  });
}
