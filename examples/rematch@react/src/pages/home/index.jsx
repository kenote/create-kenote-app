import React, { PureComponent } from 'react'
import CoreLayout from '../core-layout'

export default class Home extends PureComponent {

  render () {
    let { location } = this.props
    return (
      <CoreLayout>
        <h1>Welcome, This is a React App.</h1>
      </CoreLayout>
    )
  }
}