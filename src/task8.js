const groupElementsByProperty = () => {};

const array = [
  { name: 'Alice', type: 'cat' },
  { name: 'Bob', type: 'dog' },
  { name: 'Carol', type: 'cat' },
  { name: 'Dave', type: 'dog' },
];

const res = { cats: [{ name: 'Myaoo', type: 'cat' }], dogs: [] };

array.forEach((animal) => {
  const a = res[animal.type === 'cat' ? 'cats' : 'dogs'];
  a.push(animal);
});
console.log(res);
