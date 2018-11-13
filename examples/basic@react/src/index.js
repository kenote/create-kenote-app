import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import routeConfig from './store/routeConfig'
import Root from './containers/root'

const store = configureStore()
const rootNode = document.getElementById('root')

window.start = () => {
  render(
    <AppContainer>
      <Root store={store} routeConfig={routeConfig} />
    </AppContainer>
  , rootNode)

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./containers/root', () => {
      const NextRoot = require('./containers/root').default
      render(
        <AppContainer>
          <NextRoot store={store} routeConfig={routeConfig} />
        </AppContainer>,
        rootNode
      )
    })
  }
}
