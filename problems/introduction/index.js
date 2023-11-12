import fs from 'node:fs'
import msee from 'msee'

export const problem = msee.parse(fs.readFileSync(new URL('./problem.md', import.meta.url), 'utf8'))

export const solution = msee.parse(fs.readFileSync(new URL('./solution.md', import.meta.url), 'utf8'))

export const verify = async (args, cb) => {

}
