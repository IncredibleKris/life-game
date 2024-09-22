const items = [
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Jeans', category: 'Apparel', price: 40 },
  { name: 'Blender', category: 'Appliances', price: 75 },
  { name: 'Smartphone', category: 'Electronics', price: 599 },
];

const mapItemToCategory = (item) => item.category;
const checkUniqueCategory = (category, index, array) => {
  if (array.indexOf(category) !== index) {
    return false;
  }
  return true;
};
const categories = items.map(mapItemToCategory).filter(checkUniqueCategory);

const obyektSNulyami = categories.reduce((acc, category) => {
  const categorisedItems = items.filter((item) => item.category === category);
  const totalPrice = categorisedItems.reduce((total, item) => total + item.price, 0);
  const averagePrice = totalPrice / filterByCategory.length;
  return {
    ...acc,
    [category]: averagePrice,
  }
}, {});




console.log(obyektSNulyami);