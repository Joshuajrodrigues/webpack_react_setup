import React from 'react'
import Navbar from '../../common/components/navbar/navbar'
import NavbarTitle from '../../common/components/navbar/navbarTitle'
import NavbarLinksContainer from '../../common/components/navbar/navbarLinksContainer'
import { NavLink } from 'react-router-dom'
import Menu from '../../common/components/menu/menu'
import MenuItem from '../../common/components/menu/menuItem'
const PortalNAvbar = () => {
  return (
    <Navbar>
      <NavbarTitle>
        <NavLink to={'/'}>
          Welcome to React app
        </NavLink>
      </NavbarTitle>
      <NavbarLinksContainer>
        <Menu>
          <MenuItem>
            <a href="/admin">Access admin</a>
          </MenuItem>
        </Menu>
      </NavbarLinksContainer>
    </Navbar>
  )

}

export default PortalNAvbar