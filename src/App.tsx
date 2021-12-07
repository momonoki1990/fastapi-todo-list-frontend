import "./App.css";
import List from "./components/List";
import InputForm from "./components/InputForm";
import { Container, Heading, VStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Container>
        <VStack gridGap="8" py="16">
          <Heading as="h1" size="4xl">
            My Todo List
          </Heading>
          <InputForm />
          <List />
        </VStack>
      </Container>
    </div>
  );
}

export default App;
