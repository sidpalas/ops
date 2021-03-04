import enquirer from 'enquirer'
import { render } from '@cto.ai/tux'

export async function prompt (info) {
  const { ns, questions, ...opts } = info
  const response = await enquirer.prompt({
    ...opts,
    styles: {
      strong (s) { return render(`{tuxCallOut.bold ${s}}`) }
    }
  })

  return response
}

export default {
  prompt: { ns: 'prompt' }
}
