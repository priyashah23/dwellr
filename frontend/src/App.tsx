import './App.css';
import { Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getProperties } from './api';
import { ReactComponent as Logo } from './assets/Dwellr_Logo.svg';

function App() {
  const { isLoading, isError, data } = useQuery({ queryKey: ['todos'], queryFn: getProperties });

  console.log('isLoading', isLoading);
  console.log('isError', isError);
  console.log(data);

  return (
    <Flex as="main" minHeight="100vh" padding={4} alignItems="center" justifyContent="center" bg="brand.primary">
      <Logo />
    </Flex>
  );
}

export default App;
