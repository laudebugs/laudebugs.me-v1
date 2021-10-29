/** @jsxImportSource theme-ui */

import Image from 'next/image'
import { useState } from 'react'
import { Subject } from 'rxjs'
import { useColorMode } from 'theme-ui'
import SideNav from './side-nav'

const MenuButton = open => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = open => setIsOpen(open)

  const close = new Subject()
  close.subscribe(isOpen => toggleDrawer(isOpen))

  const [colorMode] = useColorMode()

  return (
    <>
      <Image
        sx={{ variant: 'containers.menuButton', transform: `rotate(${isOpen ? '90deg' : '0deg'})` }}
        src={`/images/elements/menu${colorMode == 'light' ? '' : '_light'}.svg`}
        width={40}
        height={40}
        alt="menu toggle"
        onClick={() => toggleDrawer(!isOpen)}
      />
      <SideNav close={close} isOpen={isOpen}></SideNav>
    </>
  )
}

export default MenuButton
