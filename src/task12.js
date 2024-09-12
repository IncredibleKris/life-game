// Напиши функцию которая получит на вход value.
// Если value типа string то сконвертируй в число.
// Если value типа не string и не number то верни строку 'error'
// Если value < 0 то верни строку 'negative'
// Если value == 0 или value > 0 верни строку 'positive'
// Если в value типа string не число, то верни строку 'notNumber'

const numberfy = (value) => {
  if (typeof value === 'string' && value.trim() === '') {
    return Number.NaN;
  }
  return typeof value === 'string' ? Number(value) : value;
};

const getNumberType = (value) => {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return 'error';
  }
  const numberValue = numberfy(value);
  if (Number.isNaN(numberValue)) {
    return 'notNumber';
  }
  return numberValue < 0 ? 'negative' : 'positive';
};

console.log(getNumberType('-2'));
