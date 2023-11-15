Here's the official solution in case you want to compare notes:

```js
import fs from 'node:fs'
import { CID } from 'multiformats'

const cid = CID.decode(fs.readFileSync(process.stdin.fd))
const res = await fetch(`https://w3s.link/ipfs/${cid}`)
process.stdout.write(await res.text())
```

# YOU DID IT!

Type `$ADVENTURE_NAME` to show the menu.
