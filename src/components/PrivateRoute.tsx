import React, { useContext } from 'react'

import { Redirect, Route } from 'react-router-dom'

import { AuthContext } from '../contexts/AuthContext'

export const PrivateRoute = ({ Component, ...rest }: any) => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Route {...rest} render={props => isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
  )
}
