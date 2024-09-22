// Дано: имя и дата срока годности, отсортировать по сроку, если одинаковый - по алфавиту.
// если срок истек - отобразить такой же список

type Product = {
  name: string;
  expiryDate: Date;
};

const products: Product[] = [
  { name: 'Yogurt', expiryDate: new Date(2024, 8, 5) },
  { name: 'Ab', expiryDate: new Date(2024, 8, 5) },
  { name: 'Za', expiryDate: new Date(2024, 8, 5) },
  { name: 'Milk', expiryDate: new Date(2024, 8, 25) },
  { name: 'Crab sticks', expiryDate: new Date(2025, 0, 31) },
  { name: 'Banh Mi', expiryDate: new Date(2024, 8, 18) },
  { name: 'Spirulina', expiryDate: new Date(2026, 10, 21) },
  { name: 'Chocolate', expiryDate: new Date(2025, 0, 31) },
];

const sortedByAlphabet = products.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

const sortedByExpiryDate = sortedByAlphabet.sort(
  (a, b) => a.expiryDate.getTime() - b.expiryDate.getTime(),
);

const getProductText = (product: Product) => {
  return `- ${product.name} - ${product.expiryDate.toISOString().split('T')[0]}`;
};

const now = new Date();
const isExpired = (product: Product) => product.expiryDate < now;

const expired = sortedByExpiryDate
  .filter((product) => isExpired(product))
  .map(getProductText)
  .join('\n\r');
const notExpired = sortedByExpiryDate
  .filter((product) => !isExpired(product))
  .map(getProductText)
  .join('\n\r');

console.log(
  `Продукты с актуальным сроком годности:\n\r${notExpired}\n\rПродукты с истекшим сроком годности:\n\r${expired}`,
);
