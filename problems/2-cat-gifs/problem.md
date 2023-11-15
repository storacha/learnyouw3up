# Storing cat gifs for fun and gossip

These cat gifs are not going to store themselves. Lets hurl them into the permanent web where they can be revered **forever**.

But wait, what did you just say? Permanent web? Yeah, like IPFS.

IPFS uses content addressing (sometimes known as hash addressing) where you refer to data by a "hash" that is created from the data itself. If the data changes, the hash changes. Anyone can store and distribute your data because the hash guarantees the data cannot change. Imagine the caching possibilities!

In the third web, you hash your content _first_, that way you know the hash you generated refers to the content you generated it from, and if you fetch the content by it's hash, you can verify that the content you receive hasn't been tampered with because it "hashes" to the same value.

In IPFS, hashes are referred to as Content Identifiers, or CID for short. In this exercise we're going to transform your data into content addressed data, that you can refer to via a CID, upload it to web3.storage and print out the CID.

Create a _new_ file for your solution e.g. `ex3.js`. Import the w3up library and create the client as before. Install the module `files-from-path` from npm (`npm install files-from-path`) and import it like so:

```js
import { filesFromPaths } from 'files-from-path'
```

Use the `uploadDirectory` function on the client to upload you favourite cat gif from your local file system to web3.storage. You'll receive a CID for the content, use `console.log` to print it out.

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify program.js`
* For help run: `$ADVENTURE_NAME help`
