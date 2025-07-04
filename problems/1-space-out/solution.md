Here's the official solution in case you want to compare notes:

```js
import * as Client from '@storacha/client'

const client = await Client.create()
const space = await client.createSpace('my space')
const myAccount = await client.login('my@email')

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

# YOU DID IT!

Type `$ADVENTURE_NAME` to show the menu.
