import * as Client from '@storacha/client'

const client = await Client.create()
const myAccount = await client.login('your@email')
await myAccount.plan.wait()

const space = await client.createSpace('my space', { account: myAccount })
console.log(space.did())
