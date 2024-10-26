import { Box } from '@mui/material';

export type CellProps = {
  isAlive: boolean;
};
export const Cell = (props: CellProps) => {
  const { isAlive } = props;
  return <Box>{isAlive ? 'alive' : 'dead'}</Box>;
};
