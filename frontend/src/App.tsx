import './App.css';
import { Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getProperties = async () => {
  const response = await axios.get('/api/property');
  return response.data;
};

function App() {
  const { isLoading, isError, data } = useQuery({ queryKey: ['todos'], queryFn: getProperties });

  console.log('isLoading', isLoading);
  console.log('isError', isError);
  console.log(data);

  return (
    <Flex as="main" minHeight="100vh" padding="2rem">
      Hello
    </Flex>
  );
}

export default App;
