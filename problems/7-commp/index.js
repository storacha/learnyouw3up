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

    if (!info.piece) {
      cb(false)
      return console.error('Invalid deal info: missing piece')
    }
    if (!Array.isArray(info.deals)) {
      cb(false)
      return console.error('Invalid deal info: non-array deals')
    }

    console.log(`\n           Piece: ${info.piece}\n`)
    for (const deal of info.deals) {
      if (!deal || typeof deal !== 'object') {
        cb(false)
        return console.error('Invalid deal info: non-object deal')
      }

      if (!deal.provider) {
        cb(false)
        return console.error('Invalid deal info: missing provider')
      }
      console.log(`Storage Provider: f0${deal.provider}`)

      if (!deal.aggregate) {
        cb(false)
        return console.error('Invalid deal info: missing aggregate CID')
      }
      console.log(`       Aggregate: ${deal.aggregate}`)

      if (!deal.aux?.dataSource?.dealID) {
        cb(false)
        return console.error('Invalid deal info: missing deal ID')
      }
      console.log(`         Deal ID: ${deal.aux.dataSource.dealID}\n`)
    }

    cb(true)
  })()
}
