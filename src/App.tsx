import React, { Component, ReactNode } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Users from './components/users'

class App extends Component<any> {


  public render(): ReactNode {

    return (
        <Switch>
          <Route exact path="/" component={Users} />
        </Switch>
    )
  }
}

export default App
