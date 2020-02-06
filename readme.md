# @telegraf/session

[![node](https://img.shields.io/npm/v/@telegraf/session.svg?style=flat-square)](https://www.npmjs.com/package/@telegraf/session)

This is session middleware for [@telegraf/core](https://npmjs.com/package/@telegraf/core) package.

*Currently in development progress*

## Installation

```
$ npm install @telegraf/session
```
or using `yarn`:
```
$ yarn add @telegraf/session
```


## Usage

```js
import Telegraf from '@telegraf/core'
import session from '@telegraf/session'

const bot = new Telegraf('token')

bot.use(session())

bot.on('text', (ctx) => {
  ctx.session.counter = ctx.session.counter || 0
  ctx.session.counter++
  return ctx.reply(`Message counter:${ctx.session.counter}`)
})

bot.launch()
```

_Coming soon..._
