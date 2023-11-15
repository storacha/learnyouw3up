import * as Client from '@web3-storage/w3up-client'

const client = await Client.create()
console.log(client.did())
