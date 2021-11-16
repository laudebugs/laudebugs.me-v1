import { dark, tosh } from '@theme-ui/presets'
import shadesOfPurple from '@theme-ui/prism/presets/shades-of-purple.json'

const theme = {
  ...tosh,
  config: {
    // initialColorModeName: 'dark'
  },
  colors: {
    ...tosh.colors,
    background: '#D6C9C9',
    text: '#061323',
    borderColor: '#061323',
    modes: {
      ...tosh.colors.modes,
      dark: {
        ...dark.colors,
        text: '#DBD8F0',
        primary: '#CA7DF9',
        secondary: '#50CAE2',
        background: '#181528',
        borderColor: '#efebe9'
      }
    }
  },
  containers: {
    link: {
      color: 'text',
      textDecoration: 'none'
    },

    stickyMe: {
      position: 'sticky',
      top: 0
    },
    menuButton: {
      position: 'sticky',
      top: 0,
      zIndex: 4
    },
    progressBar: {
      position: 'sticky',
      width: '100%',
      top: '0',
      left: 0,
      margin: '0 0 1.5% 0',
      zIndex: 1,
      marginBottom: '0'
    }
  },

  styles: {
    ...tosh.styles,
    p: {
      ...tosh.styles.p,
      fontSize: '16pt'
    },
    h6: {
      ...tosh.styles.h6,
      variant: 'text.pre'
    },
    pre: {
      ...tosh.styles.pre,
      border: '0'
    },
    code: {
      ...shadesOfPurple
    },
    progress: {
      color: '#c2185b'
    }
  },
  fonts: {
    heading: 'Amiri, serif',
    body: 'Jost, sans-serif',
    monospace: 'IBM Plex Mono, monospace'
  }
}
export default theme
