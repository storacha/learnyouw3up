/* eslint n/no-callback-literal: 0 */
import fs from 'node:fs'
import path from 'node:path'
import { execaNode } from 'execa'
import msee from 'msee'
import * as dagJSON from '@ipld/dag-json'

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

    let info
    try {
      info = dagJSON.parse(stdout)
    } catch (err) {
      cb(false)
      return console.error(`Failed to parse deal info: ${err.message}`)
    }

    console.log(`\n           Piece: ${info.piece}\n`)
    for (const deal of info.deals) {
      console.log(`Storage Provider: f0${deal.provider}`)
      console.log(`       Aggregate: ${deal.aggregate}`)
      console.log(`         Deal ID: ${deal.aux.dataSource.dealID}\n`)
    }

    cb(true)
  })()
}
