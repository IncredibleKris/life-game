type Cars = {
  name: 'string';
  part: 'string';
};

type Tasks = {
  deadline: number;
  costPrice: number;
  revenue: number;
};

const repairDifficulty = {
  Engine: 5,
  Brakes: 2,
  Transmission: 4,
  Battery: 1,
  Suspension: 3,
  Tires: 1,
};

const repairMethod = {
  Engine: 'Замена деталей двигателя',
  Brakes: 'Замена тормозных колодок',
  Transmission: 'Ремонт коробки передач',
  Battery: 'Замена аккумулятора',
  Suspension: 'Регулировка подвески',
  Tires: 'Замена шин',
};

const difficultyClasses = {
  1: 'Начальный',
  2: 'Новичок',
  3: 'Средний',
  4: 'Продвинутый',
  5: 'Эксперт',
};

const carArray = [
  {
    name: 'Mitsubishi',
    part: 'Brakes',
    deadline: 2,
    costPrice: 1400,
    revenue: 1750,
  },
  {
    name: 'Hyundai',
    part: 'Transmission',
    deadline: 6,
    costPrice: 1900,
    revenue: 2600,
  },
  {
    name: 'Tesla',
    part: 'Battery',
    deadline: 7,
    costPrice: 1200,
    revenue: 1400,
  },
  {
    name: 'Volkswagen',
    part: 'Tires',
    deadline: 1,
    costPrice: 1100,
    revenue: 1560,
  },
  {
    name: 'Toyota',
    part: 'Suspension',
    deadline: 4,
    costPrice: 1750,
    revenue: 2100,
  },
  { name: 'BMW', part: 'Engine', deadline: 1, costPrice: 2500, revenue: 3750 },
  {
    name: 'Porsche',
    part: 'Battery',
    deadline: 1,
    costPrice: 1200,
    revenue: 1500,
  },
  { name: 'Mazda', part: 'Tires', deadline: 1, costPrice: 1100, revenue: 1200 },
  { name: 'Kia', part: 'Brakes', deadline: 2, costPrice: 1400, revenue: 1740 },
];

// Дано:
// Массив автомобилей для починки в мастерской
// У каждого автомобиля есть имя (name) и деталь для починки (part)
// У каждой задачи по ремонту есть:
// - deadline (сколько дней осталось до починки)
// - себестоимость починки (costPrice)
// - стоимость выручки при выполнении задачи (revenue)
// Есть словарь сложности починки деталей (repairDifficulty)
// const repairDifficulty = {
//   Engine: 5,
//   Brakes: 2,
//   Transmission: 4,
//   Battery: 1,
//   Suspension: 3,
//   Tires: 1,
// };
// Словарь сложности указывает минимальный уровень навыков мастера для починки детали
// Есть словарь способов починки деталей (repairMethod)
// const repairMethod = {
//   Engine: 'Замена деталей двигателя',
//   Brakes: 'Замена тормозных колодок',
//   Transmission: 'Ремонт коробки передач',
//   Battery: 'Замена аккумулятора',
//   Suspension: 'Регулировка подвески',
//   Tires: 'Замена шин',
// };
// Название профессионализма мастера
// const difficultyClasses = {
//   1: 'Начальный',
//   2: 'Новичок',
//   3: 'Средний',
//   4: 'Продвинутый',
//   5: 'Эксперт',
// };

// Требуется:
// - Вывести список дел: имя автомобиля и способ починки +
// - Указать дату, до какого дня надо выполнить починку, вычислять от сегодняшней даты
// - Разбить на группы по уровню мастерства мастера +++
// - Отсортировать по приоритету с ремонта (priority = revenue / costPrice / deadline)

const priorityArray = carArray.map((car) => {
  return {
    name: car.name,
    part: car.part,
    priority: car.revenue / car.costPrice / car.deadline,
  };
});

const sortedByPriority = priorityArray.sort((a, b) => b.priority - a.priority);

console.log(sortedByPriority);

const getDeadline = (term) => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + term);
  const deadlineDate = futureDate.toISOString().split('T')[0];
  return deadlineDate;
};

const priority = (car) => {
  const { revenue, costPrice, deadline } = car;
  return revenue / costPrice / deadline;
};

const carArrayByPriority = carArray.sort((a, b) => priority(b) - priority(a));

const getCarTask = (car) => {
  const { name, part, deadline } = car;
  return `- ${name}: ${repairMethod[part]}. ${getDeadline(deadline)}`;
};

console.log(
  Object.keys(difficultyClasses).reduce((acc, level) => {
    const masterName = difficultyClasses[level];
    const list = carArrayByPriority
      .filter((car) => repairDifficulty[car.part] === Number(level))
      .map(getCarTask)
      .join('\n\r');
    return `${acc}\n\r${masterName}:\n\r${list}`;
  }, ''),
);
