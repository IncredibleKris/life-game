import { Box, Button } from '@mui/material';
import { useState } from 'react';

const gameState = [
  [false, false, true, true, false, false, true, true, false, false],
  [false, true, false, false, true, true, false, false, true, false],
  [true, false, false, false, false, false, false, false, false, true],
  [true, false, false, false, false, false, false, false, false, true],
  [false, true, false, false, false, false, false, false, true, false],
  [false, false, true, false, false, false, false, true, false, false],
  [false, false, false, true, false, false, true, false, false, false],
  [false, false, false, false, true, true, false, false, false, false],
];

const App = () => {
  const [prev, setPrev] = useState(1);
  const [current, setCurrent] = useState(1);

  return (
    <Box>
      <Button
        variant='contained'
        onClick={() => {
          const next = prev + current;
          setCurrent(next);
          setPrev(current);
        }}
      >
        {`fibonacci prev ${prev} current ${current}`}
      </Button>
      <Box>
        {gameState.map((row, rowIndex) => {
          return (
            <Box
              key={`${rowIndex}`}
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              {row.map((cell, cellIndex) => {
                return (
                  <Box
                    key={`${rowIndex}_${cellIndex}`}
                    sx={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: cell ? 'green' : 'red',
                    }}
                  />
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default App;
