import styles from './index.module.scss';
import { useColorMode } from 'theme-ui';
import Header from '../components/header'
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  const [colorMode, setColorMode] = useColorMode()
  setColorMode('light')

  return (
    <div className={styles.page}>
      <Header/>
    </div>
  )
}

export default Index;
