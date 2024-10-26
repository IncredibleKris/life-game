// 1) Напиши функцию которая получает узел, и название другого узла
// Функция должна ответить можно ли приехать в название этого города или нет

import { CityNode, GraphRoute, graphs } from './graphs';
import { getAllRoutes } from './utils';

// 4) Напиши функцию которая получает узел и название города
// Возращает все пути до города без повторений городов два раза в пути (несколько массивов узлов)
const getRoutesToDestination = (
  source: CityNode,
  destinationName: string,
): GraphRoute[] => {
  const allRoutes = getAllRoutes(source);
  const routesToDestination = allRoutes.filter(
    (route) => route[route.length - 1].name === destinationName,
  );
  return routesToDestination;
};

const isCityReachable = (
  source: CityNode,
  destinationName: string,
): boolean => {
  const routesToDestination = getRoutesToDestination(source, destinationName);
  return routesToDestination.length !== 0;
};

console.log(isCityReachable(graphs[5], 'Mariupol'));

// 2) Напиши функцию которая получает узел
// Возращает массив - все названия городов которые можно посетить

const getReachableCityNames = (source: CityNode): string[] => {
  const allRoutes = getAllRoutes(source);
  const notUniqueAllCities = allRoutes.flat(1);
  const allCities = notUniqueAllCities.filter(
    (node, index, array) => array.indexOf(node) === index,
  );
  const allCityNames = allCities.map((node) => node.name)
  return allCityNames;
};

console.log(getReachableCityNames(graphs[6]));

// 3) Напиши функцию которая получает узел и название города
// Возращает кратчайший (меньше всего узлов) путь
// от узла который дан до узла которого дано название. Вернуть в виде массива узлов

const getShortestRoute = (
  source: CityNode,
  destinationName: string,
): GraphRoute | undefined => {
  const routesToDestination = getRoutesToDestination(source, destinationName);
  const shortestRoute = routesToDestination.sort((a, b) => a.length - b.length)[0];
  return shortestRoute;
};

console.log(getShortestRoute(graphs[0], graphs[3].name));
