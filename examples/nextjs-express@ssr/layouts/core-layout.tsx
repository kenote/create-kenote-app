import * as React from 'react'
import { Layout } from '../components'
import Header from './header'
import '../styles/page.scss'

interface CoreLayoutProps {
  children?: React.ReactNode
  context: string
}

export default class CoreLayout extends React.PureComponent<CoreLayoutProps, any> {

  static defaultProps: CoreLayoutProps = {
    children: null,
    context: '/'
  }

  render () {
    let { children, context } = this.props
    return (
      <Layout>
        <Header context={context} />
        <div className="page" style={{ animation: 'pageMask 2.4s' }}>
          {children}
        </div>
      </Layout>
    )
  }

}