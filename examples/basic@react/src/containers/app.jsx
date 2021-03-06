import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { InitializeComponent } from 'kenote-react-utils/dist/initialize'
import * as initializeActions from 'kenote-react-utils/dist/initialize/actions'
import '../styles/common.scss'

var initialOptions = null
try {
  initialOptions = __INITIALIZE__
} catch (error) {
  
}
@connect(
  state => ({
    pending: state.initialize.pending,
    progress: state.initialize.progress
  }),
  dispatch => ({
    actions: bindActionCreators({ ...initializeActions }, dispatch)
  })
)
export default class AppEntry extends PureComponent {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    setTimeout( () => {
      this.props.actions.initialProgress(85)
      setTimeout( () => {
        this.props.actions.initialProgress(100)
      }, 500)
    }, 500)
  }

  render () {
    let { children, pending, progress, actions } = this.props
    let { initialProgress, initialComplete } = actions
    return (
      <InitializeComponent {...{ ...initialOptions, pending, progress }} actions={{ initialProgress, initialComplete }} >
        {children}
      </InitializeComponent>
    )
  }
}