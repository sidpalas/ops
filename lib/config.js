import { homedir } from 'os'
import { join } from 'path'
import localConfig from '@cto.ai/ops-local-config'

export const configDir = join(homedir(), '.config', '@cto.ai', 'ops')

export default localConfig({ dir: configDir })
