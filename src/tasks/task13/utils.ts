export type Fruit = {
  name: string;
  category: 'fruit';
  weight: number;
};
export type Vegetable = {
  name: string;
  category: 'vegetable';
  weight: number;
};
export type Device = {
  name: string;
  category: 'device';
  chargeLevel: number;
};
export type Stationery = {
  name: string;
  category: 'stationery';
  count: number;
};
export type Item = Fruit | Vegetable | Device | Stationery;
type FoodItem = Fruit | Vegetable;
type Category = Item['category'];
type ItemDictionary = {
  'fruit': Fruit,
  'vegetable': Vegetable,
  'device': Device,
  'stationery': Stationery,
}

const minVegetablesTotalWeight = 2;
const minFruitsTotalWeight = 1;
const minFruitTypesCount = 3;
const minStationeryItemCount = 4;
const minDeviceChargeLevel = 30;

const getCategorisedItems = <TargetCategory extends Category>(items: Item[], category: TargetCategory) => {
  return items.filter((item): item is ItemDictionary[TargetCategory] => item.category === category);
};

const getFoodTotalWeight = (foodItems: FoodItem[]) => {
  return foodItems.reduce((total, foodItem) => total + foodItem.weight, 0);
};

const getFoodItemsText = (foodItems: FoodItem[]) => {
  return foodItems
    .map((foodItem) => `${foodItem.name} ${foodItem.weight} kg`)
    .join(', ');
};

export const getVegetableTask = (items: Item[]) => {
  const vegetables = getCategorisedItems(items, 'vegetable');
  const vegetablesTotalWeight = getFoodTotalWeight(vegetables);
  if (vegetablesTotalWeight < minVegetablesTotalWeight) {
    const availableVegetables = vegetables.filter((item) => item.weight > 0);
    const availableVegetablesText = getFoodItemsText(availableVegetables);
    return `Buy ${(minVegetablesTotalWeight - vegetablesTotalWeight).toFixed(2)} kg or more vegetables! There are ${availableVegetablesText} left.`;
  }
  return undefined;
};

export const getFruitTask = (items: Item[]) => {
  const fruits = getCategorisedItems(items, 'fruit');
  const totalWeightFruits = getFoodTotalWeight(fruits);
  const availableFruits = fruits.filter((item) => item.weight > 0);
  const typeFruitsCount = availableFruits.length;
  const availableFruitsText = getFoodItemsText(availableFruits);
  const todoTexts = [
    totalWeightFruits < minFruitsTotalWeight
      ? `Buy ${(minFruitsTotalWeight - totalWeightFruits).toFixed(2)} kg or more fruits!`
      : undefined,
    typeFruitsCount < minFruitTypesCount
      ? `Buy ${minFruitTypesCount - typeFruitsCount} or more kinds of fruits! There are only ${typeFruitsCount} kinds left.`
      : undefined,
  ];
  const todoText = todoTexts.filter((taskText) => taskText).join(' ');
  const task =
    todoText !== ''
      ? `${todoText} There are ${availableFruitsText} left.`
      : undefined;
  return task;
};

export const getStationeryTasks = (items: Item[]) => {
  const stationeryItems = getCategorisedItems(items, 'stationery');
  const stationeryItemToBuyArray = stationeryItems.filter(
    (item) => item.count < minStationeryItemCount,
  );
  const tasks = stationeryItemToBuyArray.map(
    (item) =>
      `Buy ${minStationeryItemCount - item.count} or more ${item.name}s! There are ${item.count} ${item.name}s left.`,
  );
  return tasks;
};

export const getDevicesTasks = (items: Item[]) => {
  const devices = getCategorisedItems(items, 'device');
  const unchargedDevices = devices.filter(
    (item) => item.chargeLevel < minDeviceChargeLevel,
  );
  const tasks = unchargedDevices.map(
    (item) =>
      `Charge your ${item.name}! There are only ${item.chargeLevel}% left.`,
  );
  return tasks;
};
