import React from 'react'
import Navbar from '../../common/components/navbar/navbar'
import NavbarTitle from '../../common/components/navbar/navbarTitle'
import NavbarLinksContainer from '../../common/components/navbar/navbarLinksContainer'
import Menu from '../../common/components/menu/menu'
import MenuItem from '../../common/components/menu/menuItem'
import { Link } from 'react-router-dom/dist'
const DashboardNavbar = () => {
    return (
        <Navbar>
            <NavbarTitle>
                <Link to={'/admin'}>
                    Welcome to Admin
                </Link>
            </NavbarTitle>
            <NavbarLinksContainer>
                <Menu>
                    <MenuItem>
                        <a href="/">Access portal</a>
                    </MenuItem>
                </Menu>
            </NavbarLinksContainer>
        </Navbar>
    )
}

export default DashboardNavbar