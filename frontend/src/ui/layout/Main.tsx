import { FlexProps, Flex, Box, IconButton, Avatar } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';
import { ReactComponent as Logo } from '../../assets/Dwellr_Logo.svg';
import { SettingsIcon } from '@chakra-ui/icons';

const Main = (props: FlexProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const showHeader = pathname !== '/';

  return (
    <Flex flexDirection="column">
      {showHeader ? (
        <Flex
          as="header"
          alignItems="center"
          px={2}
          bg="white"
          borderBottom="1px solid"
          borderColor="cardDefaultBorderDefault"
          gap={2}
        >
          <Box
            as={Logo}
            color="brandPrimary"
            width={24}
            onClick={() => navigate('/properties')}
            cursor="pointer"
            mr="auto"
          />
          <Avatar name="Priya Shah" onClick={() => navigate('/user')} cursor="pointer" bg="avatarBrandBackgroundDefault" color="badgeSavedText" />
          <IconButton aria-label="Preferences" icon={<SettingsIcon />} onClick={() => navigate('/preferences')} />
        </Flex>
      ) : null}
      <Flex
        as="main"
        flexDirection="column"
        padding={4}
        alignItems="center"
        justifyContent="center"
        bg="brandPrimary"
        color="white"
        gap={6}
        minHeight="100vh"
        {...props}
      />
    </Flex>
  );
};

export default Main;
