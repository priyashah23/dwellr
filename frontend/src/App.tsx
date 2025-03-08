import './App.css';
import { Box, Flex, Button } from '@chakra-ui/react';
// import { useQuery } from '@tanstack/react-query';
// import { getProperties } from './api';
import { ReactComponent as Logo } from './assets/Dwellr_Logo.svg';
import Main from './ui/layout/Main';

function App() {
  // const { isLoading, isError, data } = useQuery({ queryKey: ['todos'], queryFn: getProperties });


  return (
    <Main
    >
      <Box as={Logo} color="brandPrimary" />
      <Button variant="primary">Log in</Button>
      <Button variant="secondary">Register</Button>
    </Main>
  );
}

export default App;
