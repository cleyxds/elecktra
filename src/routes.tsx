import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { PrivateRoute } from './components/PrivateRoute'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/signup' exact component={Signup}/>
        <PrivateRoute path='/dashboard' exact Component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}
