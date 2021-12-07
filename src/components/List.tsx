import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Spinner, Stack } from "@chakra-ui/react";
import ListItem from "./ListItem";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

const List = () => {
  const [list, setList] = useState<Array<Task>>([]);
  const fetchTasks = async () => {
    const res: AxiosResponse | null = await axios
      .get("http://localhost:8000/tasks")
      .catch(() => {
        alert("some error");
        return null;
      });
    if (res) {
      setList(res.data);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <Stack width="100%">
      {list.length ? (
        list.map((task: Task) => (
          <ListItem key={task.id} title={task.title} isDone={task.done} />
        ))
      ) : (
        <Spinner />
      )}
    </Stack>
  );
};

export default List;
