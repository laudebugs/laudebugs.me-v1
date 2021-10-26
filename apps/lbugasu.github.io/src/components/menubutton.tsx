/** @jsxImportSource theme-ui */

import styles from './side-nav.module.scss'
import { fromEvent, Subject } from 'rxjs'
import Image from 'next/image'
import { useState } from 'react'
import SideNav from './side-nav'
import { useColorMode } from 'theme-ui'

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
