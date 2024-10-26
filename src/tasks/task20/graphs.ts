export type CityNode = {
  name: string,
  nodes: CityNode[],
};

export type GraphRoute = CityNode[];

export const graphs: CityNode[] = [
  {
    name: 'Kyiv',
    nodes: [],
  },
  {
    name: 'Odessa',
    nodes: [],
  },
  {
    name: 'Koblevo',
    nodes: [],
  },
  {
    name: 'Gola Prystan',
    nodes: [],
  },
  {
    name: 'Kherson',
    nodes: [],
  },
  {
    name: 'Mariupol',
    nodes: [],
  },
  {
    name: 'Kharkiv',
    nodes: [],
  },
];

graphs[0].nodes = [
  graphs[1], graphs[2], graphs[4]
];

graphs[1].nodes = [
  graphs[0], graphs[2], graphs[3]
];

graphs[2].nodes = [
  graphs[4]
];

graphs[3].nodes = [];

graphs[4].nodes = [
  graphs[0], graphs[1], graphs[2]
];

graphs[5].nodes = [];

graphs[6].nodes = [
  graphs[0], graphs[1], graphs[4]
];
