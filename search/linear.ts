{
  const linearSearch = (arr: number[], item: number): number => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  };
}
