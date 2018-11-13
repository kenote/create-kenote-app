import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components'
import Header from './header'
import '../styles/page.scss'
import '../styles/page-loading.scss'

export default class CoreLayout extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  render () {
    let { children } = this.props
    return (
      <Layout>
        <Header />
        <div className="page" style={{ animation: 'pageMask 2.4s' }}>
          {children}
        </div>
        <div className="page-loading" />
      </Layout>
    )
  }
}