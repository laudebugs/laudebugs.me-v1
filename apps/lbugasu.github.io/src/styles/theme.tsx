import { dark, tosh } from '@theme-ui/presets'
import nightOwl from '@theme-ui/prism/presets/night-owl.json'
import shadesOfPurple from '@theme-ui/prism/presets/shades-of-purple.json'
const theme = {
  ...tosh,
  initialColorModeName: 'light',
  colors: {
    ...tosh.colors,
    background: '#efebe9',
    text: '#202124',
    borderColor: '#202124',
    modes: {
      ...tosh.colors.modes,
      dark: {
        ...dark.colors,
        borderColor: '#efebe9'
      }
    }
  },

  containers: {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      centerNav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        logo: {
          margin: '0 2ch 0 2ch'
        },
        a: {
          color: 'text',
          textDecoration: 'none'
        },
        h3: {
          margin: '0'
        }
      }
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
      ...shadesOfPurple,
      margin: '0.25rem 1rem 0.25rem 1rem'
    }
  }
}
export default theme
