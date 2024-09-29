import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Task } from './common';
import { CreateTaskPopup } from './CreateTaskPopup';
import { defaultTasks } from './defaultTasks';
import { TaskPreview } from './TaskPreview';
import { useRefHeight } from './useRefHeight';

export const Task17 = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [searchText, setSearchText] = useState('');

  const theme = useTheme();
  const header = useRefHeight();
  const footer = useRefHeight();

  const isSubstring = (text: string, searchText: string) => {
    return text
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase().trim());
  };

  return (
    <Box
      component={Paper}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        gap: 2,
        position: 'relative',
      }}
    >
      <Box
        ref={header.ref}
        sx={{
          padding: 4,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <TextField
          label='Search'
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          marginTop: header.height,
          marginBottom: footer.height,
        }}
      >
        {tasks
          .filter((task) => isSubstring(task.text, searchText))
          .map((task, index) => (
            <TaskPreview
              key={index}
              taskData={task}
              editTask={(newText: string) => {
                const newTasks = tasks.map((t): Task => {
                  if (task !== t) {
                    return t;
                  }
                  return { text: newText, status: 'pending' };
                });
                setTasks(newTasks);
              }}
              deleteTask={() => {
                const newTasks = tasks.filter((t) => t !== task);
                setTasks(newTasks);
              }}
              completeTask={() => {
                const newTasks = tasks.map((t): Task => {
                  if (task !== t) {
                    return t;
                  }
                  return { ...task, status: 'done' };
                });
                setTasks(newTasks);
              }}
            />
          ))}
      </Box>
      <Box
        ref={footer.ref}
        sx={{
          padding: 4,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Button
          variant='contained'
          onClick={() => setIsCreateOpen(true)}
          fullWidth
        >
          Add Task
        </Button>
      </Box>
      {isCreateOpen && (
        <CreateTaskPopup
          cancel={() => setIsCreateOpen(false)}
          confirm={(text) => {
            const newTask: Task = { text: text, status: 'pending' };
            const newTasks: Task[] = [...tasks, newTask];
            setTasks(newTasks);
            setIsCreateOpen(false);
          }}
        />
      )}
    </Box>
  );
};
