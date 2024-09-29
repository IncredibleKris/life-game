import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FC } from 'react';
import { Task17 } from './tasks/task17';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
  spacing: 4,
});

export const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Task17 />
    </ThemeProvider>
  );
};
