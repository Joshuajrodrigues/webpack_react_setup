import React from 'react'

const Menu = ({ children, ariaLabelledBy = "mainmenulabel" }) => {
    return (
        <nav aria-labelledby={ariaLabelledBy}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default Menu