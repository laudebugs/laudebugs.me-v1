/** @jsxImportSource theme-ui */

import styles from './side-nav.module.scss'
import { fromEvent, Subject } from 'rxjs'
import Image from 'next/image'
import { useState } from 'react'
import SideNav from './side-nav'

const MenuButton = open => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = open => setIsOpen(open)

  const close = new Subject()
  close.subscribe(isOpen => toggleDrawer(isOpen))

  return (
    <>
      <Image
        sx={{ variant: 'containers.menuButton', transform: `rotate(${!isOpen ? '180deg' : '0deg'})` }}
        src="/images/elements/menu.svg"
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
