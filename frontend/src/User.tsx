import { Tooltip, Flex, Text, Heading, Avatar, Input, IconButton, Button } from '@chakra-ui/react';
import { CalendarIcon, ChatIcon, DragHandleIcon, StarIcon, ViewIcon } from '@chakra-ui/icons';
import Main from './ui/layout/Main';

const User = () => {
  return (
    <Main>
      <Avatar size="2xl" name="Priya Shah" bg="avatarBrandBackgroundDefault" color="badgeSavedText"/>
      <Heading>Hi Priya 👋</Heading>
      <Flex alignItems="center" gap={2}>
        <Text>Level 1</Text>
        <StarIcon />
      </Flex>
      <Input placeholder="How are you feeling today?" bg="white" maxW="60%" />
      <Flex alignItems="center" gap={2}>
        <Tooltip label="Calendar" fontSize="md">
          <IconButton icon={<CalendarIcon />} aria-label="Calendar" size="lg" />
        </Tooltip>

        <Tooltip label="Chat" fontSize="md">
          <IconButton icon={<ChatIcon />} aria-label="Chat" size="lg" />
        </Tooltip>

        <Tooltip label="Bingo" fontSize="md">
          <IconButton icon={<DragHandleIcon />} aria-label="Bingo" size="lg" />
        </Tooltip>

        <Tooltip label="Achievements" fontSize="md">
          <IconButton icon={<StarIcon />} aria-label="Achievements" size="lg" />
        </Tooltip>
      </Flex>
      <Button rightIcon={<ViewIcon />} variant="contrast">Invite partner</Button>
    </Main>
  );
};

export default User;
