# Storing cat memes for fun and gossip

These cat memes of yours are not going to store themselves. Let's catapult them into the permanent web where they can be adored **forever**.

But wait, what did you just say? Permanent web? Yeah, like IPFS.

**What is the Permanent Web?**

Imagine a world where your favorite cat memes are preserved forever. That's the magic of IPFS (InterPlanetary File System). IPFS uses content addressing, a fancy way of saying you refer to data by a "hash" created from the data itself. If the data changes, the hash changes too. This ensures that the data remains unchanged and untampered with. Think of it as a digital fingerprint for your memes!

**Why Content Addressing?**

On the third web, you hash your content first. This means the hash you generate is unique to the content you created. If you fetch the content by its hash, you can be sure that the content hasn't been tampered with because it "hashes" to the same value. It's like a super-secure way to keep your cat memes pristine and perfect.

**Let's Get Started!**

Download a meme locally (or use the one that you already have!), upload them to web3.storage, and print out their unique CID (Content Identifier). Once you downloaded the last meme your friend sent you, continue with:

**1. Create a New File**
Create a _new_ file, like `ex3.mjs`.
**2. Import w3up and create the client**
Import the w3up library and create the client as before. 
**3. Instal the `files-from-path` module**
It helps read files from your local file system and transforms file paths into a format that can be uploaded to web3.storage. Without this module, you’d be stuck doing all the heavy lifting of file reading and formatting - who has time for that in this economy?
Install `npm install files-from-path` and import:

```js
import { filesFromPaths } from 'files-from-path'
```
**4. Upload the meme**
Specify the path to the meme:
```js
const files = await filesFromPaths(['path-to-your-meme']) 
```
and upload it with using the client's `uploadDirectory` function:
```js
const root = await client.uploadDirectory(files)
```

Finally, print the CID:
```js
console.log(root.toString())
```

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex3.mjs`
* For help run: `$ADVENTURE_NAME help`
