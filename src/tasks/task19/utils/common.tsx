const allDigits = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  zero: '0',
} as const;

type AllDigits = typeof allDigits;
type DigitValue = AllDigits[keyof AllDigits];

const allOperators = {
  plus: '+',
  minus: '-',
  multiply: '*',
  divide: '/',
} as const;

type AllOperators = typeof allOperators;
export type OperatorValue = AllOperators[keyof AllOperators];

export const allCalculatorCharacters = {
  ...allDigits,
  ...allOperators,
  brackets: '()',
  equals: '=',
  dot: '.',
} as const;

type AllCalculatorCharacters = typeof allCalculatorCharacters;
export type CalculatorCharacter = AllCalculatorCharacters[keyof AllCalculatorCharacters];

export const isOperator = (character: string): character is OperatorValue =>
  Object.values(allOperators).some((operator) => operator === character);

export const isDigit = (character: string): character is DigitValue => 
  Object.values(allDigits).some((digit) => digit === character);

export const isCalculatorCharacter = (character: string): character is CalculatorCharacter => 
  Object.values(allCalculatorCharacters).some((calculatorCharacter) => calculatorCharacter === character);
