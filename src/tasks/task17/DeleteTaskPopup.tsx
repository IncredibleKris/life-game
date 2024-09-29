import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Task } from './common';

export type DeleteTaskPopupProps = {
  confirm: () => void;
  cancel: () => void;
  task: Task;
};
export const DeleteTaskPopup = (props: DeleteTaskPopupProps) => {
  const { confirm, cancel, task } = props;

  return (
    <Dialog open={true} onClose={cancel}>
      <DialogTitle>Delete Task?</DialogTitle>
      <DialogContent>{task.text}</DialogContent>
      <DialogActions>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={confirm}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};
