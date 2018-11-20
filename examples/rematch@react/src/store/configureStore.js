import { init } from '@rematch/core'
import initialize from 'kenote-react-utils/dist/initialize/model'

export default init({
  models: {
    initialize: initialize('initialize')
  }
})