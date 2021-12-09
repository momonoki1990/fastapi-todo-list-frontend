import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Container, Heading, VStack } from "@chakra-ui/react";
import "./App.css";
import List from "./components/List";
import InputForm from "./components/InputForm";
import { Task } from "./schema";

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const fetchTasks = async () => {
    const res: AxiosResponse | null = await axios
      .get("http://localhost:8000/tasks")
      .catch(() => {
        alert("some error");
        return null;
      });
    if (!res) {
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
          <List tasks={tasks} />
        </VStack>
      </Container>
    </div>
  );
}

export default App;
