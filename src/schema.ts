export type Task = {
  id: number;
  title: string;
  done: boolean;
};

export type UpdateTaskData = {
  title: string;
  done?: boolean;
};
