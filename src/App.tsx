import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { Container, Heading, VStack } from "@chakra-ui/react";
import "./App.css";
import List from "./components/List";
import InputForm from "./components/InputForm";
import { Task } from "./schema";
import APIHelper from "./lib/APIHelper";

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const fetchTasks = async () => {
    let res: AxiosResponse;
    try {
      res = await APIHelper.getAllTasks();
    } catch (err) {
      console.error(err);
      alert("some error");
      return;
    }
    setTasks(res.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="App">
      <Container>
        <VStack gridGap="8" py="16">
          <Heading as="h1" size="4xl">
            My Todo List
          </Heading>
          <InputForm tasks={tasks} setTasks={setTasks} />
          <List tasks={tasks} setTasks={setTasks} />
        </VStack>
      </Container>
    </div>
  );
}

export default App;
