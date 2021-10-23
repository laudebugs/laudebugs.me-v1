import styles from './index.module.scss'
import { useColorMode } from 'theme-ui'
import Header from '../components/header'
export function Index(props) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  const [colorMode, setColorMode] = useColorMode()
  setColorMode(props.initialColorMode)

  return (
    <div className={styles.page}>
      <Header {...props} />
      <h2>{props.word}</h2>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  return {
    props: {
      initialColorMode: 'light',
      word: 'Larry McLarry'
    }
  }
}
