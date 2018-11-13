import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import CoreLayout from '../core-layout'

export default class About extends PureComponent {

  render () {
    return (
      <CoreLayout>
        <h1>This is About Page</h1>
      </CoreLayout>
    )
  }
}