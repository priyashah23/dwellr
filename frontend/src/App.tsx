import './App.css';
import { Box, Flex, Button } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getProperties } from './api';
import { ReactComponent as Logo } from './assets/Dwellr_Logo.svg';

function App() {
  const { isLoading, isError, data } = useQuery({ queryKey: ['todos'], queryFn: getProperties });

  console.log('isLoading', isLoading);
  console.log('isError', isError);
  console.log(data);

  return (
    <Flex
      as="main"
      flexDirection="column"
      minHeight="100vh"
      padding={4}
      alignItems="center"
      justifyContent="center"
      bg="brandPrimary"
      gap={4}
    >
      <Box as={Logo} color="textContrast" />
      <Button variant="contrast">Log in</Button>
      <Button variant="primary">Log in</Button>
      <Button variant="secondary">Log in</Button>
    </Flex>
  );
}

export default App;
