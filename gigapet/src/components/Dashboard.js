import React from 'react'
import DailyProgressSummary from './DailyProgressSummary'
import AddFoodLaunch from './AddFoodLaunch'
import Summary from './Summary'
import Avatar from './Avatar'
import { AddModal } from './AddModal'


const Dashboard = props => {
    return (
        <div>
            <div>
                <DailyProgressSummary />
                <AddFoodLaunch />
            </div>
            <div>
                <Summary />
                <Avatar />
            </div>
        </div>
    )
}

export default Dashboard;