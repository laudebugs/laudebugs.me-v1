import { dark, tosh } from '@theme-ui/presets'
import shadesOfPurple from '@theme-ui/prism/presets/shades-of-purple.json'
export const theme: Theme = {
  useLocalStorage: false,
  ...tosh,
  config: {
    initialColorModeName: 'darkMode',
    printColorModeName: 'lightMode'
  },
  colors: {
    ...tosh.colors,
    background: '#D6C9C9',
    text: '#061323',
    borderColor: '#061323',
    muted: tosh.colors.muted,
    secondary: '#327169',
    accent: '#FC7A1E',
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
  // containers: {
  //   link: {
  //     color: 'text',
  //     textDecoration: 'none'
  //   },

  //   stickyMe: {
  //     position: 'sticky',
  //     top: 0
  //   },
  //   menuButton: {
  //     position: 'sticky',
  //     top: 0,
  //     zIndex: 4
  //   },
  //   progressBar: {
  //     position: 'sticky',
  //     width: '100%',
  //     top: '0',
  //     left: 0,
  //     margin: '0 0 1.5% 0',
  //     zIndex: 1,
  //     marginBottom: '0'
  //   }
  // },

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

import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'
import { Theme, ThemeProvider as BaseThemeProvider } from 'theme-ui'

interface MyProviderProps {
  theme: Theme
  components?: any // MDXComponents | MergeMDXComponents
  children: React.ReactNode
}
export function ThemeProvider({ theme, components, children }: MyProviderProps) {
  return (
    <BaseThemeProvider theme={theme}>
      <MDXProvider components={{}}>{children}</MDXProvider>
    </BaseThemeProvider>
  )
}
