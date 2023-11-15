import fs from 'node:fs'
import path from 'node:path'
import { execaNode } from 'execa'
import msee from 'msee'
import * as Link from 'multiformats/link'
import * as Client from '@web3-storage/w3up-client'

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
    
    const str = String(stdout.split(`\n`).at(-1)).trim()
    let root
    try {
      root = Link.parse(str)
    } catch (err) {
      cb(false)
      return console.log(`Invalid CID: "${str}"`)
    }

    const client = await Client.create()
    const { results } = await client.capability.store.list()
    const found = results.some(r => r.link.toString() === root.toString())
    if (!found) {
      cb(false)
      return console.log(
        results.length
          ? `Found ${results.length} stored items but ${root} was not one of them.`
          : `No items stored in space: ${client.currentSpace()}`
      )
    }

    cb(true)
  })()
}
