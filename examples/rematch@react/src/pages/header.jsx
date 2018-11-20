import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import * as Images from '../assets/images'
import './header.scss'
import history from '../store/history'
import { assetUrl } from '../utils'
import { isActiveLink } from 'kenote-react-utils'

export default class Header extends PureComponent {

  render () {
    return (
      <div className="layout-header">
        <div className="logo">
          <img src={assetUrl(Images.logo)} />
        </div>
        <div className="nav">
          <ul>
            <li className={activeClassName('/')}><Link to="/" >Home</Link></li>
            <li className={activeClassName('/about')}><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

const activeClassName = linkname => isActiveLink(linkname, history.location.pathname) ? 'active' : ''