import BackspaceIcon from '@mui/icons-material/Backspace';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { addCharacter, deleteCharacter } from './utils/addCharacter';
import { allCalculatorCharacters, isCalculatorCharacter } from './utils/common';

export const Calculator = () => {
  const [inputVal, setInputVal] = useState('');

  return (
    <Box display='flex' flexDirection='column' gap={1} margin={4} width='500px'>
      <Box>
        <TextField
          fullWidth
          label='input'
          size='small'
          variant='outlined'
          value={inputVal}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position='end'>
                  <Button
                    onClick={() => setInputVal(deleteCharacter(inputVal))}
                  >
                    <BackspaceIcon fontSize='small' />
                  </Button>
                  <Button onClick={() => setInputVal('')}>
                    <CloseIcon fontSize='small' />
                  </Button>
                </InputAdornment>
              ),
            },
          }}
          onKeyDown={(event) => {
            const character = event.key;
            const position = event.target.selectionStart;
            if (character === 'Backspace') {
              setInputVal(deleteCharacter(inputVal));
              return;
            }
            if (!isCalculatorCharacter(character)) {
              return;
            }
            const newInputVal = addCharacter(inputVal, character);
            setInputVal(newInputVal);
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateAreas: `
            'one two three plus'
            'four five six minus'
            'seven eight nine multiply'
            'brackets zero dot divide'
            'equals equals equals equals'
          `,
          gap: 1,
        }}
      >
        {Object.entries(allCalculatorCharacters).map(([key, value]) => {
          return (
            <Button
              key={key}
              variant='outlined'
              sx={{ gridArea: key }}
              onClick={() => {
                const newInputVal = addCharacter(inputVal, value);
                setInputVal(newInputVal);
              }}
            >
              {value}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
