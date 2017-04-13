import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import WelcomePage from './WelcomePage'

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={WelcomePage} />
      </Router>
    )
  }
}

export default App
