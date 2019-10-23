import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


export function PrivateRoute({component: Component, render: Render, ...rest}) {
    return(
        <Route {...rest} render={props => {
            console.log( "props in PR", props)
         
            if (localStorage.getItem('token')) {
                if (Component) return <Component {...props} />
                if (Render) return Render(props)
            }
            else {
                return <Redirect to='/login' />
            }
        }} />
    )
}

const mapStateToProps = state => {
    console.log('mapsStateToProps state in Private Route', state)
  
    return {
      loggedInUser: state.loggedInUser,
      isLoading: state.isLoading,
      error: state.error
    }
  }

export default connect(mapStateToProps, {})(PrivateRoute);