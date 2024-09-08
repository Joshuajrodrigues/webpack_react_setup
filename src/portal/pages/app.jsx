import React from 'react'


import { Outlet } from 'react-router-dom'
import PortalNavbar from '../components/portalNavbar'
import ContentContainer from '../../common/components/contentContainer/contentContainer'

const App = () => {
    return (
        <div>
            <PortalNavbar />
            <ContentContainer>
                <main>
                    <Outlet />
                </main>
            </ContentContainer>
        </div>
    )
}

export default App