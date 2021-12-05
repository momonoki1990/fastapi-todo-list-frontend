import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import axios, { AxiosResponse } from "axios";

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
    <ul>
      {list.length ? (
        list.map((task: Task) => (
          <ListItem key={task.id} title={task.title} isDone={task.done} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
};

export default List;
