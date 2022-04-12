import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "800": "#FFBA08",
      "100": "rgba(255, 186, 8, 0.5)"
    },
    gray: {
      "200": "#DADADA",
      "700": "#47585B"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#DADADA'
      }
    }
  }
})