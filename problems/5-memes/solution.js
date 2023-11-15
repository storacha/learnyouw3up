import fs from 'node:fs'
import { CID } from 'multiformats'

const cid = CID.decode(fs.readFileSync(process.stdin.fd))
const res = await fetch(`https://w3s.link/ipfs/${cid}`)
process.stdout.write(await res.text())
