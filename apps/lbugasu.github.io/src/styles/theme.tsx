import { dark, tosh } from '@theme-ui/presets'
import nightOwl from '@theme-ui/prism/presets/night-owl.json'
import shadesOfPurple from '@theme-ui/prism/presets/shades-of-purple.json'
const theme = {
  ...tosh,
  config: {
    // initialColorModeName: 'dark'
  },
  colors: {
    ...tosh.colors,
    background: '#efebe9',
    text: '#202124',
    borderColor: '#202124',
    modes: {
      ...tosh.colors.modes,
      dark: {
        ...dark.colors,
        background: '#202124',
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
      margin: '0 0 1.5% 0'
    }
  },
  fonts: {
    heading: 'Amiri, serif',
    body: 'Amiri, serif',
    monospace: 'IBM Plex Mono, monospace'
  },
  styles: {
    ...tosh.styles,
    p: {
      ...tosh.styles.p,
      fontSize: '16pt'
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
  }
}
export default theme
