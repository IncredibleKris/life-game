const filterNumbersBigger10 = (numbers) => {
  return numbers.filter((number) => number > 10);
};

// const res = [3, 8, 11, 20, 42].filter(x => (x > 10));
console.log(filterNumbersBigger10([3, 8, 11, 20, 42]));
