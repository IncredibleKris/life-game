export type TaskStatus = 'done' | 'pending';
export type Task = {
  text: string;
  status: TaskStatus;
};
