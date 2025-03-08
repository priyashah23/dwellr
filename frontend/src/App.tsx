import './App.css';
import { Box, Button, Stack } from '@chakra-ui/react';
// import { useQuery } from '@tanstack/react-query';
// import { getProperties } from './api';
import { ReactComponent as Logo } from './assets/Dwellr_Logo.svg';
import Main from './ui/layout/Main';

function App() {
  // const { isLoading, isError, data } = useQuery({ queryKey: ['todos'], queryFn: getProperties });

  return (
    <Main>
      <Box as={Logo} color="white" />
      <Stack
        spacing={2}
        bg="white"
        padding={4}
        borderRadius="md"
        border="1px solid"
        borderColor="cardDefaultBorderDefault"
      >
        <Button variant="primary">Log in</Button>
        <Button variant="secondary">Register</Button>
      </Stack>
    </Main>
  );
}

export default App;
