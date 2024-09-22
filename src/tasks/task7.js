const transactions = [
  { type: 'income', amount: 1200 },
  { type: 'expense', amount: 500 },
  { type: 'income', amount: 1600 },
];

const initial = { income: 0, expense: 0 };

const res = transactions.reduce((acc, transaction) => {
  console.log('applyTransaction', { acc, transaction });
  return {
    ...acc,
    [transaction.type]: acc[transaction.type] + transaction.amount,
  };
}, initial);
console.log(res);
