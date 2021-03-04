import { render } from '@cto.ai/tux'

export function log ({ message, interpolate = [] }) {
  console.log(render(message), ...interpolate)
}

export function newline () { console.log() }

export default {
  log: { ns: 'print' },
  newline: { ns: 'print', type: 'newline' }
}
