/* eslint n/no-callback-literal: 0 */
import fs from 'node:fs'
import path from 'node:path'
import { execaNode } from 'execa'
import msee from 'msee'
import * as Link from 'multiformats/link'
import * as Client from '@storacha/client'
import { CAR } from '@ucanto/core'

export const problem = msee.parse(fs.readFileSync(new URL('./problem.md', import.meta.url), 'utf8'))

export const solution = msee.parse(fs.readFileSync(new URL('./solution.md', import.meta.url), 'utf8'))

/**
 * @param {string[]} args
 * @param {(success: boolean) => void} cb
 */
export const verify = (args, cb) => {
  (async () => {
    const filepath = path.resolve(args[0])
    console.log(`Verifying ${filepath}...\n`)
    const { stdout, all } = await execaNode(filepath, [], { all: true })
    console.log(all ?? '')

    const shards = []
    for (const l of stdout.split('\n')) {
      try {
        shards.push(Link.parse(l))
      } catch (err) {
        cb(false)
        return console.log(`Invalid CID: "${l}"`)
      }
    }
    // last one should be the root CID
    const root = shards.pop()
    if (!root) {
      cb(false)
      return console.log('No CIDs in output')
    }
    if (!shards.length) {
      cb(false)
      return console.log('No shard CIDs in output')
    }

    for (const shard of shards) {
      if (shard.code !== CAR.code) {
        cb(false)
        return console.log(`Expecting a CAR CID: "${shard}"`)
      }
    }

    const client = await Client.create()
    // TODO: I'd like to client.capability.upload.get() this ideally.
    const { results } = await client.capability.upload.list()
    const upload = results.find(r => r.root.toString() === root.toString())
    if (!upload) {
      cb(false)
      return console.log(`No upload found for root: ${root}`)
    }

    for (const shard of upload.shards ?? []) {
      if (!shards.some(s => s.toString() === shard.toString())) {
        cb(false)
        return console.log(`Shard found in upload but not in output: ${shard}`)
      }
    }
    for (const shard of shards) {
      if (!(upload.shards ?? []).some(s => s.toString() === shard.toString())) {
        cb(false)
        return console.log(`Shard found in output but not in upload: ${shard}`)
      }
    }

    cb(true)
  })()
}
