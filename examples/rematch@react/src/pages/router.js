import React from 'react'
import { LocationProvider, Router } from '@reach/router'
import history from '../store/history'
import HomeRouter from './home/router'
import AboutRouter from './about/router'
import { PageNotFound } from '../components'
import AppEntry from '../containers/app'

export default (
  <LocationProvider history={history} >
    <Router>
      <AppEntry path="/">
        <HomeRouter path="/" />
        <AboutRouter path="about/*" />
        <PageNotFound path="*" />
      </AppEntry>
    </Router>
  </LocationProvider>
)