# DUDE, WHERE'S MY CAR?

Alright, you’ve made it this far, so let’s take things up a notch. We’ve talked about CAR files before, but now we’re going to really dig into them. Your task? Re-assemble a CAR file into a file, but do it trustlessly—meaning you don’t just take what you get; you verify it.

## The Challenge:
A CAR file contains a DAG—a graph of nodes that represent your data. When you fetch data over HTTP, it’s all nice and tidy, but there’s a catch: you can’t just trust the bytes you receive. You need to verify that what you got actually matches the CID you were expecting. This means re-assembling the data into its original DAG structure and making sure everything checks out.

## What You Need to Do:
1. Yes, you guessed it - file number 7 - `ex7.mjs`, for this challenge.
2. Install Necessary Libraries: You’ll need two libraries to get this done: `@ipld/car` for reading CAR files and `ipfs-unixfs-exporter` for exporting files from an IPFS DAG.
```js
npm install @ipld/car
npm install ipfs-unixfs-exporter
```
3. Fetch the CAR File: You’ll be fetching a CAR file from the web3.storage trustless gateway. The CID for the directory containing the file you want is `bafybeifdnnn35jnwel2dno7hu7zfew6gtxhkaynaszuj4i77j4m7wsv72a`, and the specific file to extract is `/cat2.txt`.
```js
const cid = 'bafybeifdnnn35jnwel2dno7hu7zfew6gtxhkaynaszuj4i77j4m7wsv72a'
const path = '/cat2.txt'

const res = await fetch(`https://dag.w3s.link/ipfs/${cid}?format=car`)
const bytes = new Uint8Array(await res.arrayBuffer())
```
4. Read the CAR File: Use CarReader from `@ipld/car` to read the CAR file. This step is crucial because you need to adapt this reader to work with the exporter from `ipfs-unixfs-exporter`.
```js
const reader = await CarReader.fromBytes(bytes)
```
5. Create an Adapter: You’ll need to create a simple adapter that allows the exporter to pull data from your CAR reader. This adapter will fetch the blocks (nodes) as needed during the re-assembly process.
```js
const entry = await exporter(`${cid}${path}`, {
  async get (cid) {
    const block = await reader.get(cid)
    if (!block) throw new Error(`not found: ${cid}`)
    return block.bytes
  }
})
```
6. Re-assemble and Output: Finally, you’ll re-assemble the file from the DAG and output it directly to the console.
```js
import { Readable } from 'node:stream'
Readable.from(entry.content()).pipe(process.stdout)
```
## What’s Happening Here?
- **Trustless Verification:** You’re not just taking the data as-is; you’re verifying that the nodes of the DAG match the expected structure and hashes.
- **Re-assembly:** The client (your code) re-assembles the file from the DAG, ensuring that the file you get matches the original content.
- **Flexibility:** By adapting the CAR reader to work with the exporter, you gain the flexibility to handle data more securely and efficiently.

## Why It’s Important:
This challenge teaches you the importance of trustless systems in decentralized environments. You’re learning how to verify data integrity independently, which is crucial in a world where trust can be a luxury.

Now, go ahead and build that ex7.mjs file, fetch your CAR, and make sure everything checks out. Happy coding! 🚗🔍

**Next Steps:**
Experiment with different CAR files and paths to deepen your understanding.
Think about how this process could be automated or expanded for larger datasets.

You’re doing an awesome job - one more to go!

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex7.mjs`
* For help run: `$ADVENTURE_NAME help`
