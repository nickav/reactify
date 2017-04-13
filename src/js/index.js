import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { AppContainer } from 'react-hot-loader'
import store from './store'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

// for development
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextRoot = require('./components/App').default
    render(NextRoot)
  })
}
