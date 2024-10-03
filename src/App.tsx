import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FC } from 'react';
import { Task19} from './tasks/task19';

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
      <Task19 />
    </ThemeProvider>
  );
};
