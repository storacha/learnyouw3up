# CommP at the edge or die trying

Great job 👏 You are smashing it. Keep on truckin'.

So, lets talk Filecoin...

## The Challenge
The Challenge:
Filecoin is a decentralized storage network built on IPFS protocols. When you upload data using w3up, it generates a DAG and its corresponding root CID. This DAG is packed into CAR files (shards), and each shard gets a Piece CID. This Piece CID is crucial because it’s how your data is addressed in deals with Filecoin Storage Providers (SPs).

The fun part? These deals are like massive shipping containers that need to be filled up. Your data goes through an aggregation pipeline, which ultimately leads to it being stored in a deal with a Filecoin SP. The process includes inclusion proofs and data aggregation proofs—basically, all the cryptographic magic that proves your data is securely stored and retrievable.

## What You’re Going to Do:
1. For the last time... `ex8.mjs`, you know the drill.
2. Install the Necessary Libraries: You’ll need the @web3-storage/data-segment for parsing the Piece CID and @ipld/dag-json for encoding the output.
```js
npm install @web3-storage/data-segment
npm install @ipld/dag-json
```
3. Fetch Filecoin Deal Information: Use the `client.capability.filecoin.info()` method to query the deal information for a specific Piece CID. You’ll be working with the Piece CID `bafkzcibcaycsfehfpywo35zgvilhaqegcsrslebar6vcnwvzi64fljvwdrhvqei`.
```js
import * as Client from '@web3-storage/w3up-client'
import { Piece } from '@web3-storage/data-segment'

const client = await Client.create()
const piece = Piece.fromString('bafkzcibcaycsfehfpywo35zgvilhaqegcsrslebar6vcnwvzi64fljvwdrhvqei')
```
4. Query the Deal Information: This step queries the deal information and handles any errors that might arise during the process.
```js
const receipt = await client.capability.filecoin.info(piece.link)
if (receipt.out.error) {
  throw new Error('Failed to get deal info', { cause: receipt.out.error })
}
```
5. Encode and Output the Data: Finally, use `dag-json` to encode the output and write it to `process.stdout`.
```js
import * as dagJSON from '@ipld/dag-json'

process.stdout.write(dagJSON.encode(receipt.out.ok))
```

## What’s Happening Here?
- **Piece CID:** Think of this as an alias for a CAR shard, used to track where your data is in the Filecoin network.
- **Aggregation Pipeline:** Your data is bundled and stored securely through a series of cryptographic proofs, ensuring it’s safe and retrievable.
- **Trustless Verification:** By querying the deal information yourself, you’re ensuring that your data is stored and managed properly on the network.

## Why It’s Cool:
This exercise shows you how to interact with the Filecoin network, giving you a behind-the-scenes look at how decentralized storage works. By querying deal information, you’re getting hands-on experience with the infrastructure that powers Web3.

Now, it’s time to create that `ex8.mjs` file and start querying some deal info! 🚀

**Next Steps:**

Experiment with different Piece CIDs to explore various deal statuses.
Think about how you might automate this process for larger datasets or integrate it into a broader application.

You’re almost done!

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex8.mjs`
* For help run: `$ADVENTURE_NAME help`
