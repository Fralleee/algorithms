{
  const binarySearch = (list: number[] = [], n: number = 0): number => {
    let min = 0;
    let max = list.length;
    while (min < max) {
      const index = Math.floor((min + max) / 2);
      const value = list[index];

      if (value === n) return index;

      if (value > n) max = index;
      else if (value < n) min = index + 1;
    }

    return -1;
  };
}
