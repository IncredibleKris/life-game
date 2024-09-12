const findIndexOfNumberDividedBy4 = (numberList) => {
  return numberList.findIndex((number) => number % 4 === 0);
};

console.log(findIndexOfNumberDividedBy4([2, 5, 7, 12]));
