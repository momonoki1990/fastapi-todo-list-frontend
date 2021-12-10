import axios, { AxiosResponse } from "axios";
import { Button, HStack, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task } from "../schema";

type Props = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

type Inputs = {
  title: string;
};

const InputForm: React.FC<Props> = ({ tasks, setTasks }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const addTask: SubmitHandler<Inputs> = async (data) => {
    const res: AxiosResponse | null = await axios
      .post("http://localhost:8000/tasks", data)
      .catch(() => {
        alert("some error");
        return null;
      });
    if (!res) {
      return;
    }
    const newTasks = [...tasks, res.data];
    setTasks(newTasks);
  };

  return (
    <form onSubmit={handleSubmit(addTask)}>
      <HStack w="100%">
        <Input
          placeholder="Enter your task title"
          w="100%"
          {...register("title")}
        />
        <Button type="submit">
          <AddIcon />
        </Button>
      </HStack>
    </form>
  );
};

export default InputForm;
