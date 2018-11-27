
import { loadConfig } from 'kenote-node-utils'

const Project: configState = loadConfig('project.ini') as configState

interface configState {
  HOST?: string
  PORT?: number
}

const config: configState = {
  HOST: '0.0.0.0',
  PORT: 3000,
  ...Project
}

export default config