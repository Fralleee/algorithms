{
  const memoized = (fn) => {
    let cache = {};
    return (...args) => {
      let n = args[0];
      if (!(n in cache)) cache[n] = fn(n);
      return cache[n];
    };
  };

  const factorial = memoized((n: number = 1): number => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  });
}
