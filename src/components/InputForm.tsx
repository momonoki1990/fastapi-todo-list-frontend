import axios, { AxiosResponse } from "axios";
import { Button, HStack, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Task, UpdateTaskData } from "../schema";
import React from "react";

type Props = {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const InputForm: React.FC<Props> = ({ tasks, setTasks }) => {
  const addTask = async (data: UpdateTaskData) => {
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

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    const target = e.currentTarget;
    const inputEl = target.title;
    await addTask({ title: inputEl.value });
    inputEl.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} style={{ width: "100%" }}>
      <HStack w="100%">
        <Input placeholder="Enter your task title" w="100%" name="title" />
        <Button type="submit">
          <AddIcon />
        </Button>
      </HStack>
    </form>
  );
};

export default InputForm;
