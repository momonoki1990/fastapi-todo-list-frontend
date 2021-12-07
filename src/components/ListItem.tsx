import { Box, Checkbox, HStack, IconButton, Text } from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";

type Props = {
  title: string;
  isDone: boolean;
};

const ListItem: React.FC<Props> = ({ title, isDone }) => {
  return (
    <HStack
      gridGap={4}
      borderBottom="1px"
      borderColor="gray.200"
      paddingBottom={1}
      width="100%"
    >
      <Checkbox defaultIsChecked={isDone ? true : false} size="lg" />
      <Text textAlign="left" flexGrow={1} fontSize="lg">
        {title}
      </Text>
      <HStack>
        <IconButton aria-label="Search database" icon={<EditIcon />} />
        <IconButton aria-label="Search database" icon={<CloseIcon />} />
      </HStack>
    </HStack>
  );
};

export default ListItem;
