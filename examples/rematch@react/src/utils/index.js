import React from 'react'
import { Router } from '@reach/router'
import { PageNotFound } from '../components'

export function renderRouteConfig (routes = []) {
  return (
    <Router>
      {routes.map((item, i) => {
        return (
          <item.component key={i} path={item.path} />
        )
      })}
      <PageNotFound path="*" />
    </Router>
  )
}

export const assetUrl = (asset) => (/^(data\:)/.test(asset) ? `` : PROJECT_ENV.context).concat(asset)