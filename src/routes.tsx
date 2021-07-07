import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}
