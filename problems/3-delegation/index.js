/* eslint n/no-callback-literal: 0 */
import fs from 'node:fs'
import path from 'node:path'
import { execaNode } from 'execa'
import msee from 'msee'
import { Delegation } from '@ucanto/core'
import { StoreConf } from '@storacha/client/stores/conf'
import * as Client from '@storacha/client'

const oneHour = 1000 * 60 * 60

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

    const store = new StoreConf({ profile: 'learnyouw3up-workshop' })
    const client = await Client.create({ store })
    console.log(`Workshop DID: ${client.did()}`)

    const { stdout } = await execaNode(filepath, [], {
      input: client.did(),
      encoding: 'buffer'
    })

    console.log('Extracting delegation...')
    const { ok: delegation, error } = await Delegation.extract(stdout)
    if (error) {
      cb(false)
      return console.error(`Failed to extract delegation: ${error}`)
    }

    if (delegation.expiration < (Date.now() + oneHour) / 1000) {
      cb(false)
      return console.error('Delegation expires within the hour! Make it expire after 1 hour.')
    }

    console.log(`Importing delegation: ${delegation.cid}`)
    try {
      await client.addSpace(delegation)
    } catch (err) {
      cb(false)
      return console.error(`Failed to add proof: ${err.message}`)
    }

    console.log(`Listing uploads in space: ${client.currentSpace()?.did()}`)
    try {
      const { results } = await client.capability.upload.list()
      for (const [i, result] of results.entries()) {
        console.log(`${i + 1}. ${result.root} @ ${result.insertedAt}`)
      }
    } catch (err) {
      cb(false)
      return console.error(`Failed to list uploads, did you delegate the correct capability?: ${err.message}`)
    }

    cb(true)
  })()
}
