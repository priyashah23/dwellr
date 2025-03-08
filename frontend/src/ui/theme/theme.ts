import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import space from './space';
import { button } from './components/button';
import radii from './radii';

const config = {
  initialColorMode: 'light'
};

const components = {
  Button: button
};

const theme = extendTheme({ colors, config, space, components, radii });

export default theme;
