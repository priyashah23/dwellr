import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#8046f1',
    secondary: '#322744',
    tertiary: '#662dbe'
  }
};

const config = {
  initialColorMode: 'light'
}

const theme = extendTheme({ colors, config });

export default theme;
