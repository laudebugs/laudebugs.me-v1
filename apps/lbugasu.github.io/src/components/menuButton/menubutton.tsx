/** @jsxImportSource theme-ui */

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Subject } from 'rxjs'
import { useColorMode } from 'theme-ui'
import SideNav from '../side-nav'
import styles from './menuButton.module.scss'

const MenuButton = open => {
  const [isOpen, setIsOpen] = useState(false)
  const [activated, setActivated] = useState(false)
  const toggleDrawer = open => {
    setActivated(true)
    setIsOpen(open)
  }

  const close = new Subject()
  close.subscribe(_isOpen => toggleDrawer(_isOpen))

  const [colorMode] = useColorMode()

  return (
    <>
      <Image
        sx={{ variant: 'containers.menuButton' }}
        src={`/images/elements/menu${colorMode == 'light' ? '' : '_light'}.svg`}
        width={40}
        className={activated ? (isOpen ? styles.opened : styles.closed) : ''}
        height={40}
        alt="menu toggle"
        onClick={() => toggleDrawer(!isOpen)}
      />
      <SideNav close={close} isOpen={isOpen}></SideNav>
    </>
  )
}

export default MenuButton
