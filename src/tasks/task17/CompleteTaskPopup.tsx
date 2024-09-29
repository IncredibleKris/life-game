import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Task } from './common';

export type CompleteTaskPopupProps = {
  confirm: () => void;
  cancel: () => void;
  task: Task;
};
export const CompleteTaskPopup = (props: CompleteTaskPopupProps) => {
  const { confirm, cancel, task } = props;

  return (
    <Dialog open={true} onClose={cancel}>
      <DialogTitle>Complete Task?</DialogTitle>
      <DialogContent>{task.text}</DialogContent>
      <DialogActions>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={confirm}>Complete</Button>
      </DialogActions>
    </Dialog>
  );
};
