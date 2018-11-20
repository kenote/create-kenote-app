import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class Layout extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: null,
  }

  constructor (props) {
    super(props)
  }

  render () {
    let { children } = this.props
    return (
      <div className="layout-warpper"  >
        {children}
      </div>
    )
  }
}