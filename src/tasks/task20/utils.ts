import { CityNode, GraphRoute } from './graphs';

const isSameRoutes = (
  firstRoute: GraphRoute,
  secondRoute: GraphRoute,
): boolean => {
  if (firstRoute.length !== secondRoute.length) {
    return false;
  }
  for (let i = 0; i < firstRoute.length; i++) {
    if (firstRoute[i].name !== secondRoute[i].name) {
      return false;
    }
  }
  return true;
};

export const getAllRoutes = (source: CityNode): GraphRoute[] => {
  const exploringRoutes: GraphRoute[] = [[source]];
  const exploredRoutes: GraphRoute[] = [];

  while (true) {
    const exploringRoute = exploringRoutes.pop();
    if (exploringRoute === undefined) {
      break;
    }
    const isExploringRoute = (exploredRoute: GraphRoute): boolean =>
      isSameRoutes(exploredRoute, exploringRoute);
    if (exploredRoutes.some(isExploringRoute)) {
      continue;
    }
    exploredRoutes.push(exploringRoute);
    const newExploringCities = exploringRoute[exploringRoute.length - 1].nodes;
    const newExploringRoutes = newExploringCities
      .filter((node) => !exploringRoute.includes(node))
      .map((node) => [...exploringRoute, node]);
    exploringRoutes.push(...newExploringRoutes);
  }
  return exploredRoutes;
};
