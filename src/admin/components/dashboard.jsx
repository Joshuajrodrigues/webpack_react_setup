import React from 'react'

import DashboardNavbar from './dashboardNavbar'
import DashboardMenu from './dashboardMenu'
import ContentContainer from '../../common/components/contentContainer/contentContainer'

const Dashboard = () => {
    return (
        <div>
            <DashboardNavbar />
            <main>
                <ContentContainer>
                    <DashboardMenu />
                </ContentContainer>
            </main>
        </div>
    )
}

export default Dashboard