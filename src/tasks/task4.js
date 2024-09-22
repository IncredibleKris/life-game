const sumNumbers = (numbers) => {
  const sum = (acc, number) => {
    return acc + number;
  };
  return numbers.reduce(sum, 0);
};

console.log(sumNumbers([1, 2, 3, 4, 5]));
