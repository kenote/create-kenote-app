import * as React from 'react'
import Link from 'next/link'
import logo from '../static/images/logo.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextPageClick } from '../redux/action'

interface HeaderProps {
  context: string
  actions?: {
    nextPageClick: Function
  }
}

@connect(
  state => ({
    ...state
  }),
  dispatch => ({
    actions: bindActionCreators({ nextPageClick }, dispatch)
  })
)
export default class Header extends React.PureComponent<HeaderProps, any> {

  static defaultProps: HeaderProps = {
    context: '/'
  }

  render () {
    let { context } = this.props
    return (
      <div className="layout-header">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav">
          <ul>
            <li className={activeClassName('/', context)}><Link href='/'><a onClick={() => this.props.actions.nextPageClick('home')}>Home</a></Link></li>
            <li className={activeClassName('/about', context)}><Link href='/about'><a onClick={() => this.props.actions.nextPageClick('about')}>About</a></Link></li>
          </ul>
        </div>
        <style jsx>{`
        // ------------------------------------
        // Sass Style
        // ------------------------------------
        .layout-header {
          display: flex;
          flex-direction: column;
          //justify-content: center;
          align-items: center;
          padding: 150px 20px 80px;
        
          .logo {
            max-width: 400px;
            img {
              max-width: inherit;
            }
          }
        
          .nav {
            margin-top: 50px;
        
            ul {
              list-style-type: none;
              padding: 0;
              display: flex;
        
              li {
                margin: 0 15px;
                font-size: 14px;
        
                a {
                  font-size: 1.5em;
                  color: #343434;
                  font-weight: bold;
                  position: relative;
        
                  &::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 3px;
                    background: #ff8011;
                    opacity: .2;
                    transition: all .5s;
                    bottom: -5px;
                  }
        
                  &:hover {
                    &::after{
                      left:0%;
                      width:100%;
                      opacity:.7
                    }
                  }
                }
        
                &.active a {
                  color: #ff6633;
                }
              }
            }
          }
        }
        `}</style>
      </div>
    )
  }
}

const activeClassName = (linkname: string, context: string): string => linkname === context ? 'active' : ''