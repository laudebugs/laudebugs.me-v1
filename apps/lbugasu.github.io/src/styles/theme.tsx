import { dark, tosh } from '@theme-ui/presets'
import nightOwl from '@theme-ui/prism/presets/night-owl.json'
import shadesOfPurple from '@theme-ui/prism/presets/shades-of-purple.json'
const theme = {
  ...tosh,
  config: {
    initialColorModeName: 'light'
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
      },
      position: 'sticky',
      top: '4px'
    },
    link: {
      color: 'text',
      textDecoration: 'none'
    },
    focus: {
      margin: '0 10% 0 10%'
    },
    contentPage: {
      margin: '2.5% 10% 0 10%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '2ch'
    },
    stickyMe: {
      position: 'sticky',
      top: 0
    },
    menuButton: {
      position: 'sticky',
      top: 0,
      zIndex: 2
    },
    progressBar: {
      position: 'sticky',
      width: '100%',
      top: '0',
      left: 0,
      margin: '0 0 1.5% 0'
    },
    sideNav: {
      position: 'fixed',
      minHeight: '100%',
      top: 0,
      width: '100%',
      left: 0,
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      menu: {
        backgroundColor: 'background',
        height: '100vh',
        padding: '10%'
      },
      shadow: {
        position: 'relative',
        backgroundColor: 'text',
        opacity: 0.65,
        height: '100%',
        zIndex: 3
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
    },
    progress: {
      color: '#c2185b'
    }
  }
}
export default theme
