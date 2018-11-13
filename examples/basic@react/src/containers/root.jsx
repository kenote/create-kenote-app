import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from '../store/history'
import { Switch, Route } from 'react-router-dom'
import { renderRouteConfig } from 'kenote-react-utils'

export default class Root extends PureComponent {

  static propTypes = {
    store: PropTypes.object.isRequired,
    routeConfig: PropTypes.array.isRequired,
  }

  render () {
    const { store, routeConfig } = this.props
    const children = renderRouteConfig(null, routeConfig, '/', { Switch, Route })
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {children}
        </ConnectedRouter>
      </Provider>
    )
  }
}