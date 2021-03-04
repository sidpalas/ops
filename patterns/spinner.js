import { spinner, render } from '@cto.ai/tux'

export function start ({ message = '' }) {
  spinner.prefixText = render(message)
  spinner.start()
}

export async function stop ({ message = '' }) {
  spinner.prefixText = render(message)
  spinner.stop()
}

export default {
  start: { ns: 'spinner', action: 'start' },
  stop: { ns: 'spinner', action: 'stop' }
}
