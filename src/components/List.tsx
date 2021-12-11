import { Spinner, Stack } from "@chakra-ui/react";
import ListItem from "./ListItem";
import { Task } from "../schema";

type Props = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const List: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <Stack width="100%">
      {tasks.length ? (
        tasks.map((task: Task) => (
          <ListItem
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))
      ) : (
        <Spinner />
      )}
    </Stack>
  );
};

export default List;
