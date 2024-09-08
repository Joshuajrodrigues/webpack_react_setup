import React from 'react'
import * as css from './navbar.module.css'
const Navbar = ({ children }) => {
    return (
        <header className={css.container}>
            {children}
        </header>
    )
}

export default Navbar