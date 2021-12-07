import { Button, HStack, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const InputForm: React.FC = () => {
  return (
    <HStack w="100%">
      <Input placeholder="Enter your task" w="100%" />
      <Button>
        <AddIcon />
      </Button>
    </HStack>
  );
};

export default InputForm;
