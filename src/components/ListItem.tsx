import axios, { AxiosResponse } from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Checkbox,
  Editable,
  EditablePreview,
  EditableInput,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Task } from "../schema";

type Props = {
  task: Task;
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

type Inputs = {
  title: string;
};

const ListItem: React.FC<Props> = ({ task, tasks, setTasks }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${id}`);
    } catch (err) {
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
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <HStack>
        <IconButton aria-label="Edit task title" icon={<EditIcon />} />
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
