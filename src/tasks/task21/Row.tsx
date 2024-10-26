/* eslint-disable react/jsx-key */
import { Cell } from './Cell';

export type RowProps = {
  cells: boolean[];
};
export const Row = (props: RowProps) => {
  const { cells } = props;
  return cells.map((cell) => <Cell isAlive={cell} />);
};
