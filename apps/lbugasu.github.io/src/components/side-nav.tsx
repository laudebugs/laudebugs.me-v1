/** @jsxImportSource theme-ui */

import styles from './side-nav.module.scss'

function SideNav({ close, isOpen }) {
  return (
    <div sx={{ display: isOpen ? 'none' : 'block' }}>
      <div sx={{ variant: 'containers.sideNav' }}>
        <div sx={{ variant: 'containers.sideNav.menu' }}></div>
        <div onClick={() => close.next(!isOpen)} sx={{ variant: 'containers.sideNav.shadow' }}></div>
      </div>
    </div>
  )
}

export default SideNav
