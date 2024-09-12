const mapNameToNameAndLength = (name) => {
  return { name: name, length: name.length };
};
console.log(mapNameToNameAndLength('Vladlen'));

const mapNamesToNameAndLengths = (names) => {
  return names.map(mapNameToNameAndLength);
};

console.log(mapNamesToNameAndLengths(['Alice', 'Bob', 'Carol']));
