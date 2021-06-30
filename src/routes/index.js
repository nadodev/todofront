import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../views/Home'
import Task from '../views/Task'
import QrCode from '../views/QrCode'
export default function index() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/task" component={Task} exact />
        <Route path="/task/:id" component={Task} exact />
        <Route path="/sincronizar" component={QrCode} exact />
      </Switch>
    </BrowserRouter>
  )
}
