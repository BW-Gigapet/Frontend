import React from 'react'
import DailyProgressSummary from './DailyProgressSummary'
import AddFoodLaunch from './AddFoodLaunch'
import Summary from './Summary'
import Avatar from './Avatar'
import { AddModal } from './AddModal'
import Editing from './Editing'


const Dashboard = props => {
    // add routes dashboard/edit and dashboard/edit/:category
    // if /edit, replace Summary with Editing
    return (
        <div>
            <div>
                <DailyProgressSummary />
                <AddFoodLaunch />
            </div>
            <div>
                {/edit/.test(props.match.url)?<Editing />:<Summary />}
                <Avatar />
            </div>
        </div>
    )
}

export default Dashboard;