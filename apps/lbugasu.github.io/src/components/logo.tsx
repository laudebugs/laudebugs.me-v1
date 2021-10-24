import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image src="/images/logos/logo_dark.svg" width={50} height={50} alt="logo"></Image>
    </div>
  )
}

export default Logo
