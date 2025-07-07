import * as Client from '@storacha/client'
import { filesFromPaths } from 'files-from-path'

const client = await Client.create()
const files = await filesFromPaths(['./lost-dog.jpg'])
const root = await client.uploadDirectory(files)

console.log(root.toString())
