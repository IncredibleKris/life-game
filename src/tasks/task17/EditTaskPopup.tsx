import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import { Task } from './common';

export type EditTaskPopupProps = {
  task: Task;
  confirm: (text: string) => void;
  cancel: () => void;
};
export const EditTaskPopup = (props: EditTaskPopupProps) => {
  const { task, confirm, cancel } = props;

  const [text, setText] = useState(task.text);

  return (
    <Dialog open={true} onClose={cancel}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label='Text'
          fullWidth
          variant='standard'
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={cancel}>Cancel</Button>
        <Button
          onClick={() => {
            confirm(text);
          }}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};
