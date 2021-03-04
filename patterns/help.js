import fs from 'fs'
import os from 'os'
import { join } from 'desm'
import { render } from '@cto.ai/tux'
const { readFile } = fs.promises

const packageJson = join(import.meta.url, '..', 'package.json')

const template = ({ name, command, describe, subcommands, meta }, pad) => `${describe}
${meta ? `\v{bold VERSION}\n  ${meta.name}/${meta.version} ${meta.os} ${meta.node}\n` : ''}
{bold USAGE}
  $ ${name}${command}:COMMAND
  
{bold COMMANDS}
  ${subcommands.map(({ subcommand, describe }) => {
    return `${command}:${subcommand.padEnd(pad)}${describe}`
  }).join('\n  ')}
`

export async function usage (info) {
  const pad = 2 + info.subcommands
    .map(({ subcommand }) => subcommand.length)
    .reduce((a, b) => a >= b ? a : b)

  if (info.name) {
    info.name += ' '
  } else {
    const { name, version } = JSON.parse(await readFile(packageJson))
    info.meta = {
      name,
      version,
      os: os.platform,
      node: `node-${process.version}`
    }
  }

  console.log(render(template(info, pad)))
}

export default {
  usage: { ns: 'help' }
}
