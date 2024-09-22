import {
  getFruitTask,
  getStationeryTasks,
  getVegetableTask,
  getDevicesTasks,
  Item,
} from './utils';

// Дано:
// Массив предметов дома
// У всех предметов есть имя name и оно к
// У всех предметов есть категория.
// Все категории дома: vegetable, fruit, device, stationery
// У fruit и vegetable есть weight сколько в наличии дома
// У device есть chargeLevel от 0 до 100
// У stationery есть count сколько их дома

// Требуется:
// Вывести список задач на день в свободной форме чтобы было удобно читать

// Если vegetable меньше 2 килограмм -> попросить купить овощи и сказать сколько и чего осталось
// Если разннообразия фруктов меньше чем 3 то попросить купить еще и сказать сколько и чего осталось
// Фрукты тоже поддерживать чтобы было киллограмм дома

// Если любого предмета из stationery меньше 4 попросить докупить (описывать нынешнее положение)

// Если заряд устройства ниже 30 то добавить в список дел для того чтобы его зарядить (описывать нп)

const homeItems: Item[] = [
  { name: 'potato', category: 'vegetable', weight: 0.2 },
  { name: 'cabbage', category: 'vegetable', weight: 0.3 },
  { name: 'beetroot', category: 'vegetable', weight: 0.5 },
  { name: 'carrot', category: 'vegetable', weight: 0.1 },
  { name: 'pineapple', category: 'fruit', weight: 0 },
  { name: 'orange', category: 'fruit', weight: 0 },
  { name: 'tangerine', category: 'fruit', weight: 0 },
  { name: 'banana', category: 'fruit', weight: 0.2 },
  { name: 'grapefruit', category: 'fruit', weight: 0.3 },
  { name: 'mobile phone', category: 'device', chargeLevel: 20 },
  { name: 'laptop', category: 'device', chargeLevel: 85 },
  { name: 'speaker', category: 'device', chargeLevel: 10 },
  { name: 'paper', category: 'stationery', count: 4 },
  { name: 'pen', category: 'stationery', count: 5 },
  { name: 'crayon', category: 'stationery', count: 2 },
  { name: 'pencil', category: 'stationery', count: 1 },
  { name: 'notebook', category: 'stationery', count: 3 },
];

const todoList = [
  getVegetableTask(homeItems),
  getFruitTask(homeItems),
  ...getStationeryTasks(homeItems),
  ...getDevicesTasks(homeItems),
].filter((task) => task !== undefined);

console.log(todoList);
