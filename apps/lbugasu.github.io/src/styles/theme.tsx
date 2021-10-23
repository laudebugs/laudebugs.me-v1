import { tosh } from '@theme-ui/presets'
const theme = {
  ...tosh,
  initialColorModeName: 'light',
  colors: {
    ...tosh.colors,
  },
  containers: {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      logo: {
        margin: '0 2ch 0 2ch'
      }
    }
  },
  styles: {
    ...tosh.styles,
  }
}
export default theme
