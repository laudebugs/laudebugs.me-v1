import Image from 'next/image'
import Link from 'next/link'
import { useColorMode } from 'theme-ui'
const Logo = () => {
  const [colorMode] = useColorMode()

  return (
    <Link href="/" className="noSelect">
      <Image src={`/images/logos/logo_${colorMode == 'light' ? 'dark' : 'light'}.svg`} width={40} height={40} alt="logo"></Image>
    </Link>
  )
}

export default Logo
