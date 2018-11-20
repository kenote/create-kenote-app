import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import Root from './containers/root'

const store = configureStore
const rootNode = document.getElementById('root')

window.start = () => {
  render(
    <AppContainer>
      <Root store={store} />
    </AppContainer>
  , rootNode)

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./containers/root', () => {
      const NextRoot = require('./containers/root').default
      render(
        <AppContainer>
          <NextRoot store={store} />
        </AppContainer>,
        rootNode
      )
    })
  }
}