import { extendTheme } from '@chakra-ui/react';

import { DrawerStyles as Drawer } from './drawerStyles';

// Setup of Chakra theme
export default extendTheme({
  colors: {
    primary: '#E95626',
    secondary: '#000000',
    background: '#FFFFFF',
    tertiary: '#D9D9D9',
    error: '#BE5845',
  },
  fonts: {
    body: 'Libre Baskerville',
  },
  styles: {
    global: {
      'html, body, #root': {
        height: '100%',
      },
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  components: {
    Drawer,
  },
});