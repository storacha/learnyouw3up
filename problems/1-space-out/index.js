/* eslint n/no-callback-literal: 0 */
import fs from 'node:fs'
import path from 'node:path'
import { execaNode } from 'execa'
import msee from 'msee'
import { Schema } from '@ucanto/validator'
import * as Client from '@storacha/client'

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

    const spaceDID = String(stdout.split('\n').at(-1)).trim()
    if (!Schema.did({ method: 'key' }).is(spaceDID)) {
      cb(false)
      return console.log(`"${spaceDID}" is not a valid DID`)
    }

    const client = await Client.create()
    const spaces = client.spaces()
    const found = spaces.some(s => s.did() === spaceDID)
    if (!found) {
      cb(false)
      return console.log(
        spaces.length
          ? `Found ${spaces.length} spaces but ${spaceDID} was not one of them.`
          : 'No spaces found, did you forget to `save()`?'
      )
    }

    await client.setCurrentSpace(spaceDID)
    cb(true)
  })()
}
