
import { createHistory } from '@reach/router'
import createHashSource from 'hash-source'

const source = createHashSource()
const history = createHistory(__DESKTOP__ ? source : window)

export default history