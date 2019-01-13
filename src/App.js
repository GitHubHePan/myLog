import React from 'react'
import { Route } from 'react-router-dom'

import Login from './container/login'
import Register from './container/register'

class App extends React.Component {
  render () {
    return (
        <div>
        <Route path="/Register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        </div>
  )
  }
}

export default App