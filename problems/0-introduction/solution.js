import * as Client from '@storacha/client'

const client = await Client.create()
console.log(client.did())
