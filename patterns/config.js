import config from '../lib/config.js'

export async function read () {
  return config.read()
}

export async function overwrite ({ state }) {
  return config.write(state)
}

export async function update ({ state }) {
  const current = await config.read()
  return config.write({ ...current, ...state })
}

export async function clear () {
  return config.clear()
}

export default {
  read: { ns: 'config', action: 'read' },
  clear: { ns: 'config', action: 'clear' },
  update: { ns: 'config', action: 'update' },
  overwrite: { ns: 'config', action: 'overwrite' }
}
