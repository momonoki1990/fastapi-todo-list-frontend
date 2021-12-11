import axios, { AxiosResponse } from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Checkbox,
  Editable,
  EditablePreview,
  EditableInput,
  HStack,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Task } from "../schema";
import APIHelper from "../lib/APIHelper";

type Props = {
  task: Task;
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const ListItem: React.FC<Props> = ({ task, tasks, setTasks }) => {
  const updateTask = async (task: Task) => {
    const data = {
      title: task.title,
      done: task.done,
    };
    let res: AxiosResponse;
    try {
      res = await APIHelper.updateTask(task.id, data);
    } catch (err) {
      console.error(err);
      alert("some error");
      return;
    }
    const idx = tasks.findIndex((t) => t.id === task.id);
    tasks.splice(idx, 1, res.data);
    setTasks(tasks);
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${id}`);
    } catch (err) {
      console.error(err);
      alert("some error");
      return;
    }
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  };

  return (
    <HStack
      gridGap={4}
      borderBottom="1px"
      borderColor="gray.200"
      paddingBottom={1}
      width="100%"
    >
      <Checkbox defaultIsChecked={task.done ? true : false} size="lg" />
      <Editable
        defaultValue={task.title}
        textAlign="left"
        flexGrow={1}
        fontSize="lg"
        onSubmit={(v: string) => updateTask({ ...task, ...{ title: v } })}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <HStack>
        <IconButton
          aria-label="Delete task"
          icon={<CloseIcon />}
          onClick={async () => await deleteTask(task.id)}
        />
      </HStack>
    </HStack>
  );
};

export default ListItem;
