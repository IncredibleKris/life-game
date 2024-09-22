const items = [
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Jeans', category: 'Apparel', price: 40 },
  { name: 'Blender', category: 'Appliances', price: 75 },
  { name: 'Smartphone', category: 'Electronics', price: 599 },
];

const categories = items
  .map((item) => item.category)
  .filter((category, index, array) => array.indexOf(category) === index);

const averagePrices = categories.reduce((acc, category) => {
  const filteredItems = items.filter((item) => item.category === category);
  const price = filteredItems.reduce((total, item) => total + item.price, 0);
  const count = filteredItems.length;
  return { ...acc, [category]: price / count };
}, {});

console.log(averagePrices);
