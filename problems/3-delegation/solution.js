import * as Client from '@storacha/client'
import * as DID from '@ipld/dag-ucan/did'
import fs from 'node:fs'

const client = await Client.create()
const twoHours = 1000 * 60 * 60 * 2

const principal = DID.parse(fs.readFileSync(process.stdin.fd, 'utf-8'))
const delegation = await client.createDelegation(principal, ['upload/list'], {
  // expiration is in _seconds_ from Unix epoch
  expiration: Math.round((Date.now() + twoHours) / 1000)
})
const { ok: archive, error } = await delegation.archive()
if (!archive) {
  throw new Error('failed to create delegation archive', { cause: error })
}

process.stdout.write(archive)
