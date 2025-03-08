import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import space from './space';

const config = {
  initialColorMode: 'light'
};

const theme = extendTheme({ colors, config, space });

export default theme;
