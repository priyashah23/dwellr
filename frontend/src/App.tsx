import './App.css';
import { Box, Button, Stack } from '@chakra-ui/react';
import { ReactComponent as Logo } from './assets/Dwellr_Logo.svg';
import Main from './ui/layout/Main';
import { useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

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
        {/* This would actually log in in a real app, just pretend to for this demo. */}
        <Button variant="primary" onClick={() => navigate('/properties')}>
          Log in
        </Button>
        <Button variant="secondary">Register</Button>
      </Stack>
    </Main>
  );
}

export default App;
