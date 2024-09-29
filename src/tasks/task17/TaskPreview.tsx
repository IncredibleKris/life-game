import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { Task } from './common';
import { CompleteTaskPopup } from './CompleteTaskPopup';
import { DeleteTaskPopup } from './DeleteTaskPopup';
import { EditTaskPopup } from './EditTaskPopup';

export type TaskPreviewProps = {
  taskData: Task;
  deleteTask: () => void;
  editTask: (newText: string) => void;
  completeTask: () => void;
};

export const TaskPreview = (props: TaskPreviewProps) => {
  const { taskData, deleteTask, editTask, completeTask } = props;

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);

  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: 3,
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <CardContent>
        <Typography variant='subtitle1' gutterBottom>
          <strong>Status:</strong> {taskData.status}
        </Typography>
        <Typography variant='body1' gutterBottom>
          <strong>Task:</strong> {taskData.text}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          onClick={() => setIsEditOpen(true)}
          sx={{
            color: theme.palette.primary.main,
            '&:hover': { color: theme.palette.primary.dark },
            transition: 'color 0.2s',
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => setIsDeleteOpen(true)}
          sx={{
            color: theme.palette.error.main,
            '&:hover': { color: theme.palette.error.dark },
            transition: 'color 0.2s',
          }}
        >
          <DeleteIcon />
        </IconButton>
        {taskData.status === 'pending' && (
          <IconButton
            onClick={() => setIsCompleteOpen(true)}
            sx={{
              color: theme.palette.success.main,
              '&:hover': { color: theme.palette.success.dark },
              transition: 'color 0.2s',
            }}
          >
            <DoneIcon />
          </IconButton>
        )}
      </CardActions>
      {isEditOpen && (
        <EditTaskPopup
          task={taskData}
          cancel={() => {
            setIsEditOpen(false);
          }}
          confirm={(text) => {
            editTask(text);
            setIsEditOpen(false);
          }}
        />
      )}
      {isDeleteOpen && (
        <DeleteTaskPopup
          cancel={() => {
            setIsDeleteOpen(false);
          }}
          confirm={() => {
            deleteTask();
            setIsDeleteOpen(false);
          }}
          task={taskData}
        />
      )}
      {isCompleteOpen && (
        <CompleteTaskPopup
          cancel={() => {
            setIsCompleteOpen(false);
          }}
          confirm={() => {
            completeTask();
            setIsCompleteOpen(false);
          }}
          task={taskData}
        />
      )}
    </Card>
  );
};
