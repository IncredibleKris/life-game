import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

export type CreateTaskPopupProps = {
  confirm: (text: string) => void;
  cancel: () => void;
};
export const CreateTaskPopup = (props: CreateTaskPopupProps) => {
  const { confirm, cancel } = props;

  const [text, setText] = useState('');

  return (
    <Dialog open={true} onClose={cancel}>
      <DialogTitle>Add a new Task</DialogTitle>
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
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
