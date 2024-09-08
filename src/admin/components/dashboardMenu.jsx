import React from 'react'
import Menu from '../../common/components/menu/menu'
import MenuItem from '../../common/components/menu/menuItem'

const DashboardMenu = () => {
    return (
        <>
            <Menu>
                <MenuItem>Posts</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Todos</MenuItem>
            </Menu>
        </>
    )
}

export default DashboardMenu