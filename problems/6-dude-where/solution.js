import { Readable } from 'node:stream'
import { CarReader } from '@ipld/car'
import { exporter } from 'ipfs-unixfs-exporter'

const cid = 'bafybeifdnnn35jnwel2dno7hu7zfew6gtxhkaynaszuj4i77j4m7wsv72a'
const path = '/cat2.txt'

const res = await fetch(`https://dag.w3s.link/ipfs/${cid}?format=car`)
const bytes = new Uint8Array(await res.arrayBuffer())

const reader = await CarReader.fromBytes(bytes)
const entry = await exporter(`${cid}${path}`, {
  async get (cid) {
    const block = await reader.get(cid)
    if (!block) throw new Error(`not found: ${cid}`)
    return block.bytes
  }
})

Readable.from(entry.content()).pipe(process.stdout)
