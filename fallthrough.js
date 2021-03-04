import { dirname, join } from 'path'
import { createRequire } from 'module'
import { spawn } from 'child_process'

const require = createRequire(import.meta.url)
const legacy = join(dirname(require.resolve('@cto.ai/ops')), 'bin', 'run')

export default function fallthrough (settings) {
  return (argv) => {
    const { origin, pathname } = new URL(settings.api)

    const env = {
      ...process.env,
      OPS_REGISTRY_HOST: settings.registry,
      OPS_API_HOST: `${origin}/`,
      OPS_API_PATH: pathname.slice(1),
      OPS_KEYCLOAK_HOST: settings.auth.url
    }

    spawn(process.execPath, [legacy, ...argv], { stdio: 'inherit', env })
  }
}
