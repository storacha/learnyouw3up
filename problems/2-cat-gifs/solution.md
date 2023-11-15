Here's the official solution in case you want to compare notes:

```js
import * as Client from '@web3-storage/w3up-client'
import { filesFromPaths } from 'files-from-path'

const client = await Client.create()
const files = await filesFromPaths(['./lost-dog.jpg'])
const root = await client.uploadDirectory(files)

console.log(root.toString())
```

# YOU DID IT!

Type `$ADVENTURE_NAME` to show the menu.
