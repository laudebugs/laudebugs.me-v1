import styles from './index.module.scss';
import Image from 'next/image'
import { useColorMode } from 'theme-ui';
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  const [colorMode, setColorMode] = useColorMode()
  setColorMode('dark')

  return (
    <div className={styles.page}>
      <img src="/images/elements/menu.png"alt="logo"/>
      <h1>let's begin</h1>
    </div>
  )
}

export default Index;
