import Image  from 'next/image'

const Logo = ({props}) => {
  return (
    <div>
      <Image src="/images/logos/logo_dark.svg" width={60} height={60} alt='logo'></Image>
   </div>
 )
}

export default Logo
