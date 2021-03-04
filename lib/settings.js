import localConfig from '@cto.ai/ops-local-config'
import { configDir } from './config.js'

const settings = localConfig({ dir: configDir, name: 'settings' })

export default settings

export const loadSettings = (...args) => settings.read(...args)
