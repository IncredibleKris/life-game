/* eslint-disable react/jsx-key */
import { Box } from '@mui/material';
import { Row } from './Row';

const columnCount = 3;
const table = [
  [true, false, false],
  [true, true, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
];

export const GameLife = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
      }}
    >
      {table.map((row) => <Row cells={row} />)}
    </Box>
  );
};
