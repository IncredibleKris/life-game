import CloseIcon from '@mui/icons-material/Close';
import {
  Grid2,
  TextField,
  Box,
  Paper,
  InputAdornment,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export const Task19 = () => {
  const [inputVal, setInputVal] = useState('');

  return (
    <Box sx={{ width: '50%', padding: 4 }}>
      <Grid2 container rowSpacing={3} columnSpacing={3}>
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
                  <Button onClick={() => setInputVal('')}>
                    <CloseIcon fontSize='small' />
                  </Button>
                </InputAdornment>
              ),
            },
          }}
          onChange={(event) => {
            setInputVal(event.target.value);
          }}
          
        />
        <Grid2 size={4}>
          <Item>
            <Button fullWidth onClick={() => setInputVal(inputVal + '1')}>
              1
            </Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>2</Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>3</Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>4</Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>5</Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>6</Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>7</Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>8</Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>9</Button>
          </Item>
        </Grid2>
        <Grid2 size={2}>
          <Item>
            <Button fullWidth>+</Button>
          </Item>
        </Grid2>
        <Grid2 size={2}>
          <Item>
            <Button fullWidth>-</Button>
          </Item>
        </Grid2>
        <Grid2 size={4}>
          <Item>
            <Button fullWidth>0</Button>
          </Item>
        </Grid2>
        <Grid2 size={2}>
          <Item>
            <Button fullWidth>x</Button>
          </Item>
        </Grid2>
        <Grid2 size={2}>
          <Item>
            <Button fullWidth>/</Button>
          </Item>
        </Grid2>
        <Grid2 size={12}>
          <Item>
            <Button fullWidth>=</Button>
          </Item>
        </Grid2>
      </Grid2>
    </Box>
  );
};
