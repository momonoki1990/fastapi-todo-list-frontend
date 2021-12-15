import { Center, Spinner, Stack, Text } from "@chakra-ui/react";
import ListItem from "./ListItem";
import { Task } from "../schema";

type Props = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  loading: boolean;
};

const List: React.FC<Props> = ({ tasks, setTasks, loading }) => {
  return (
    <Stack width="100%">
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <>
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
            <Text fontSize="2xl">タスクがありません</Text>
          )}
        </>
      )}
    </Stack>
  );
};

export default List;
