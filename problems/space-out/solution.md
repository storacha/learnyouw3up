```js
import * as Client from '@web3-storage/w3up-client'

const client = await Client.create()
const space = await client.createSpace('my space')
const myAccount = await client.login('alan.shaw@protocol.ai')

while (true) {
  const res = await myAccount.plan.get()
  if (res.ok) break
  await new Promise(resolve => setTimeout(resolve, 1000))
}

await myAccount.provision(space.did())
await space.createRecovery(myAccount.did())
await space.save()

console.log(space.did())
```