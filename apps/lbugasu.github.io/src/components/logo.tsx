import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/images/logos/logo_dark.svg" width={50} height={50} alt="logo"></Image>
      </a>
    </Link>
  )
}

export default Logo
