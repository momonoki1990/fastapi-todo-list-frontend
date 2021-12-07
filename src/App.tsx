import "./App.css";
import List from "./components/List";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <List />
      </div>
    </ChakraProvider>
  );
}

export default App;
