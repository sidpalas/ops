# @cto.ai/ops

> cto.ai CLI


# Usage

```sh-session
$ npm install -g @cto.ai/ops
$ ops COMMAND
running command...
$ ops
USAGE
  $ ops COMMAND
...
```


# Commands


* [`ops account:reset`](#ops-accountreset)
* [`ops account:signin`](#ops-accountsignin)
* [`ops account:signout`](#ops-accountsignout)
* [`ops account:signup`](#ops-accountsignup)
* [`ops account:support`](#ops-accountsupport)
* [`ops add [OPNAME]`](#ops-add-opname)
* [`ops build [PATH]`](#ops-build-path)
* [`ops certs CERTIFICATETYPE NAMEORPATH`](#ops-certs-certificatetype-nameorpath)
* [`ops cleanup [OPNAME]`](#ops-cleanup-opname)
* [`ops configs:delete`](#ops-configsdelete)
* [`ops configs:list`](#ops-configslist)
* [`ops configs:set`](#ops-configsset)
* [`ops generate:token`](#ops-generatetoken)
* [`ops help [COMMAND]`](#ops-help-command)
* [`ops init [NAME]`](#ops-init-name)
* [`ops list`](#ops-list)
* [`ops publish PATH`](#ops-publish-path)
* [`ops remove OP`](#ops-remove-op)
* [`ops run [NAMEORPATH]`](#ops-run-nameorpath)
* [`ops search [FILTER]`](#ops-search-filter)
* [`ops secrets:delete`](#ops-secretsdelete)
* [`ops secrets:list`](#ops-secretslist)
* [`ops secrets:register`](#ops-secretsregister)
* [`ops secrets:set`](#ops-secretsset)
* [`ops secrets:unregister`](#ops-secretsunregister)
* [`ops start [NAMEORPATH]`](#ops-start-nameorpath)
* [`ops status`](#ops-status)
* [`ops stop [RUNID]`](#ops-stop-runid)
* [`ops team:create`](#ops-teamcreate)
* [`ops team:info`](#ops-teaminfo)
* [`ops team:invite`](#ops-teaminvite)
* [`ops team:join`](#ops-teamjoin)
* [`ops team:list`](#ops-teamlist)
* [`ops team:remove [MEMBER]`](#ops-teamremove-member)
* [`ops team:switch`](#ops-teamswitch)
* [`ops update`](#ops-update)
* [`ops whoami`](#ops-whoami)

## `ops account:reset`

Reset your password.

```
Reset your password.

USAGE
  $ ops account:reset
```

## `ops account:signin`

Log in to your account.

```
Log in to your account.

USAGE
  $ ops account:signin

OPTIONS
  -h, --help               show CLI help
  -i, --interactive        Interactive Mode
  -p, --password=password  Password
  -u, --user=user          Username or email
```

## `ops account:signout`

Log out from your account.

```
Log out from your account.

USAGE
  $ ops account:signout

OPTIONS
  -h, --help  show CLI help
```

## `ops account:signup`

Creates an account to use with ops CLI.

```
Creates an account to use with ops CLI.

USAGE
  $ ops account:signup

OPTIONS
  -h, --help  show CLI help
```

## `ops account:support`

Contact our support team with questions.

```
Contact our support team with questions.

USAGE
  $ ops account:support

OPTIONS
  -h, --help  show CLI help
```

## `ops add [OPNAME]`

Add an op to your team.

```
Add an op to your team.

USAGE
  $ ops add [OPNAME]

ARGUMENTS
  OPNAME  Name of the public op to be added to your team. It should be of the format - @teamname/opName:versionName

OPTIONS
  -h, --help  show CLI help
```

## `ops build [PATH]`

Build your op for sharing.

```
Build your op for sharing.

USAGE
  $ ops build [PATH]

ARGUMENTS
  PATH  Path to the op you want to build.

OPTIONS
  -h, --help  show CLI help
  --nocache   Do not use cache when building the image

  --ops=ops   List of workflows from ops.yml you want to build. example:
              ops build ./ops.yml --ops commandName serviceName pipelineName
```

## `ops certs CERTIFICATETYPE NAMEORPATH`

Save an SSL certificate and key for your service

```
Save an SSL certificate and key for your service

USAGE
  $ ops certs CERTIFICATETYPE NAMEORPATH

ARGUMENTS
  CERTIFICATETYPE  (ssl) The type of certificate to store
  NAMEORPATH       Name or path of the service to save SSL for.

OPTIONS
  -h, --help             Show help screen
  --cert-file=cert-file  Path to your certificate file
  --key-file=key-file    Path to your key file
```

## `ops cleanup [OPNAME]`

Clean up locally cached docker images.

```
Clean up locally cached docker images.

USAGE
  $ ops cleanup [OPNAME]

ARGUMENTS
  OPNAME  Name of the op to be cleaned up

OPTIONS
  -h, --help  show CLI help
```

## `ops configs:delete`

Delete a config stored for the active team

```
Delete a config stored for the active team

USAGE
  $ ops configs:delete

OPTIONS
  -h, --help     show CLI help
  -k, --key=key  Secret Key Name
```

## `ops configs:list`

List all the configs that are stored for the active team

```
List all the configs that are stored for the active team

USAGE
  $ ops configs:list

OPTIONS
  -h, --help  show CLI help
```

## `ops configs:set`

Add a new config key & value

```
Add a new config key & value

USAGE
  $ ops configs:set

OPTIONS
  -f, --from-file=from-file  path to a file containing the value of the config to set
  -k, --key=key              the key of the config to set
  -v, --value=value          the value of the config to set
```

## `ops generate:token`

Generate a long live access token.

```
Generate a long live access token.

USAGE
  $ ops generate:token

OPTIONS
  -h, --help  show CLI help
```

## `ops help [COMMAND]`

display help for ops

```
display help for <%= config.bin %>

USAGE
  $ ops help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `ops init [NAME]`

Create a new Application

```
Create a new Application

USAGE
  $ ops init [NAME]

ARGUMENTS
  NAME  provide a name or pass a github url to a template

OPTIONS
  -h, --help               show CLI help
  -k, --kind=kind          the kind of Application to create (command, pipeline, etc.)
  -t, --template=template  the name of the template to use
```

## `ops list`

Lists the Ops you have in your team.

```
Lists the Ops you have in your team.

USAGE
  $ ops list

OPTIONS
  -h, --help  show CLI help
```

## `ops publish PATH`

Publish a workflow to your team.

```
Publish a workflow to your team.

USAGE
  $ ops publish PATH

ARGUMENTS
  PATH  Path to the op you want to publish.

OPTIONS
  -c, --changelog=changelog  Provide a publish changelog
  -h, --help                 show CLI help
  -o, --ops=ops              Provide the list of workflows that you want to publish.
  --nocache                  Do not use cache when building the image
```

## `ops remove OP`

Remove a workflow from your team.

```
Remove a workflow from your team.

USAGE
  $ ops remove OP

ARGUMENTS
  OP  The name and version of the command or workflow you want to remove. E.g. my-command:0.1.0

OPTIONS
  -h, --help  show CLI help
```

## `ops run [NAMEORPATH]`

Run a workflow from your team or the registry.

```
Run a workflow from your team or the registry.

USAGE
  $ ops run [NAMEORPATH]

ARGUMENTS
  NAMEORPATH  Name or path of the workflow you want to run.

OPTIONS
  -B, --batch  Runs the workflow in non-interactive batch mode.
  -b, --build  Builds the workflow before running. Must provide a path to the op.
  -h, --help   show CLI help
  --nocache    Do not use cache when building the image
```

## `ops search [FILTER]`

Search for workflows in our registry.

```
Search for workflows in our registry.

USAGE
  $ ops search [FILTER]

ARGUMENTS
  FILTER  Filter results by workflow name or description.

OPTIONS
  -h, --help  show CLI help
```

## `ops secrets:delete`

Delete a secret stored for the active team

```
Delete a secret stored for the active team

USAGE
  $ ops secrets:delete

OPTIONS
  -h, --help     show CLI help
  -k, --key=key  Secret Key Name
```

## `ops secrets:list`

List all the keys that are stored for the active team

```
List all the keys that are stored for the active team

USAGE
  $ ops secrets:list

OPTIONS
  -h, --help  show CLI help
```

## `ops secrets:register`

Register a secrets provider for a team

```
Register a secrets provider for a team

USAGE
  $ ops secrets:register
```

## `ops secrets:set`

Add a key & value

```
Add a key & value

USAGE
  $ ops secrets:set

OPTIONS
  -f, --from-file=from-file  path to a file containing the value of the secret to set
  -k, --key=key              the key of the secret to set
  -v, --value=value          the value of the secret to set
```

## `ops secrets:unregister`

Unregister a secrets provider for a team

```
Unregister a secrets provider for a team

USAGE
  $ ops secrets:unregister
```

## `ops start [NAMEORPATH]`

Start a service, pipeline or command on our cloud.

```
Start a service, pipeline or command on our cloud.

USAGE
  $ ops start [NAMEORPATH]

ARGUMENTS
  NAMEORPATH  Name or path of the workflow you want to run.

OPTIONS
  -h, --help  show CLI help
```

## `ops status`

See the status of currently running cloud services

```
See the status of currently running cloud services

USAGE
  $ ops status

OPTIONS
  -h, --help  show CLI help
```

## `ops stop [RUNID]`

Stop a service running in The Ops Cloud

```
Stop a service running in The Ops Cloud

USAGE
  $ ops stop [RUNID]

ARGUMENTS
  RUNID  Run ID of the service to stop

OPTIONS
  -h, --help  show CLI help
```

## `ops team:create`

Create your team.

```
Create your team.

USAGE
  $ ops team:create

OPTIONS
  -h, --help       show CLI help
  -n, --name=name
```

## `ops team:info`

Shows basic team information for the team you are currently on.

```
Shows basic team information for the team you are currently on.

USAGE
  $ ops team:info

OPTIONS
  -h, --help  show CLI help
```

## `ops team:invite`

Invite your team members.

```
Invite your team members.

USAGE
  $ ops team:invite

OPTIONS
  -h, --help               show CLI help

  -i, --invitees=invitees  A comma-separated string of usernames/emails we want to invite. E.g. ("user1,
                           user2@gmail.com, user3@something")
```

## `ops team:join`

Accept an invite to join a team.

```
Accept an invite to join a team.

USAGE
  $ ops team:join
```

## `ops team:list`

Shows the list of your teams.

```
Shows the list of your teams.

USAGE
  $ ops team:list

OPTIONS
  -h, --help  show CLI help
```

## `ops team:remove [MEMBER]`

Remove your team members.

```
Remove your team members.

USAGE
  $ ops team:remove [MEMBER]

ARGUMENTS
  MEMBER  The username of the team member you want to remove from the team.

OPTIONS
  -h, --help  show CLI help
```

## `ops team:switch`

Switch your currently active team.

```
Switch your currently active team.

USAGE
  $ ops team:switch

OPTIONS
  -h, --help  show CLI help
```

## `ops update`

Update The Ops CLI.

```
Update The Ops CLI.

USAGE
  $ ops update

OPTIONS
  -h, --help  show CLI help
```

## `ops whoami`

Display your user information

```
Display your user information

USAGE
  $ ops whoami

OPTIONS
  -h, --help  show CLI help
```

## Engines

* Node 12.4+
* Node 14.0+

## Development

Test:

```sh
npm test
```

Visual coverage report (run after test):

```sh
npm run cov
```

Lint:

```sh
npm run lint
```

Autoformat:

```sh
npm run lint -- --fix
```

## Releasing

For mainline releases:

```sh
npm version <major|minor|patch>
git push --follow-tags
```

For prereleases:

```sh
npm version prerelease
git push --follow-tags
```

### License

MIT
