import fs from 'node:fs'
import path from 'node:path'
import { Buffer } from 'node:buffer'
import { execaNode } from 'execa'
import msee from 'msee'
import * as Link from 'multiformats/link'

const cat = Link.parse('bafkreicn5krrora5gx47hrbj6kbfwrrskh7iawngpdudmzqp72i6jaalyu')
const catData = fs.readFileSync(new URL('./cat.txt', import.meta.url), 'utf8')

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
    const { stdout, all } = await execaNode(filepath, [], {
      input: Buffer.from(cat.bytes),
      all: true
    })
    console.log(all ?? '')

    if (stdout !== catData) {
      return cb(false)
    }

    cb(true)
  })()
}
