import Image from 'next/image'
import Link from 'next/link'
import { useColorMode } from 'theme-ui'
const Logo = () => {
  const [colorMode] = useColorMode()

  return (
    <Link href="/">
      <a>
        <Image src={`/images/logos/logo_${colorMode == 'light' ? 'dark' : 'light'}.svg`} width={50} height={50} alt="logo"></Image>
      </a>
    </Link>
  )
}

export default Logo
