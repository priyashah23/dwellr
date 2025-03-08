import { FlexProps, Flex } from '@chakra-ui/react';

const Main = (props: FlexProps) => {
  return (
    <Flex
      as="main"
      flexDirection="column"
      minHeight="100vh"
      padding={4}
      alignItems="center"
      justifyContent="center"
      bg="brandPrimary"
      color="white"
      gap={6}
      {...props}
    />
  );
};

export default Main
