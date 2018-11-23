import * as React from 'react'

interface LayoutProps {
  children?: React.ReactNode
}

export default class Layout extends React.PureComponent<LayoutProps, any> {

  static defaultProps: LayoutProps = {
    children: null
  }

  render () {
    let { children } = this.props
    return (
      <div className="layout-warpper"  >
        {children}
        <style jsx>{`
          .layout-warpper {
            height: inherit;
          }
        `}</style>
      </div>
    )
  }

}