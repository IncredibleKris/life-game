import { CalculatorCharacter, isDigit, isOperator, OperatorValue } from './common';

const addOperator = (input: string, character: OperatorValue) => {
  const previousCharacter = input[input.length - 1];
  if (character !== '-' && input === '') {
    return input;
  }
  if (previousCharacter === '-' && input.length === 1) {
    return (input = '');
  }
  if (isOperator(previousCharacter) || previousCharacter === '.') {
    return input.slice(0, -1) + character;
  }
  return input + character;
};

const addDigit = (input: string, character: CalculatorCharacter) => {
  const previousCharacter = input[input.length - 1];
  const prePreviousCharacter = input[input.length - 2];
  if (
    (previousCharacter === '0' && isOperator(prePreviousCharacter)) ||
    (previousCharacter === '0' && input.length === 1)
  ) {
    return input.slice(0, -1) + character;
  }
  return input + character;
};

const addDot = (input: string) => {
  const previousCharacter = input[input.length - 1];
  if (input === '' || isOperator(previousCharacter)) {
    return input;
  }
  for (let i = 1; i <= input.length; i++) {
    const prev = input[input.length - i];
    if (prev === '.') {
      return input;
    }
    if (isOperator(prev)) {
      break;
    }
  }
  return input + '.';
};


export const addCharacter = (input: string, character: CalculatorCharacter) => {
  if (character === '=' || character === '()') {
    return input;
  }
  if (isOperator(character)) {
    return addOperator(input, character);
  }
  if (isDigit(character)) {
    return addDigit(input, character);
  }
  if (character === '.') {
    return addDot(input);
  }
  throw new Error(`Unknown ${character}`);
};

export const deleteCharacter = (input: string) => input.slice(0, -1);

