import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export function PrivateRoute({component: Component, render: Render, ...rest}) {
    const loggedInUser = useSelector(state => state.loggedInUser)

    return(
        <Route {...rest} render={props => {
            if (localStorage.getItem('token')) { //user signed up or logged in before
                if (Object.keys(loggedInUser).length === 0) return <Redirect to='/' /> // no user
                if (!loggedInUser.childAccounts[0]) return <Redirect to='/addkidpage' /> // no child
                if (Component) return <Component {...props} />
                if (Render) return Render(props)
            }
            return <Redirect to='/' />
        }} />
    )
}

export default PrivateRoute