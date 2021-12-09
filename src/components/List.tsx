import { Spinner, Stack } from "@chakra-ui/react";
import ListItem from "./ListItem";
import { Task } from "../schema";

type Props = {
  tasks: Array<Task>;
};

const List: React.FC<Props> = ({ tasks }) => {
  return (
    <Stack width="100%">
      {tasks.length ? (
        tasks.map((task: Task) => (
          <ListItem key={task.id} title={task.title} isDone={task.done} />
        ))
      ) : (
        <Spinner />
      )}
    </Stack>
  );
};

export default List;
