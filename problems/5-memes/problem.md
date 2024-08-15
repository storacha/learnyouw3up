# Memes for my eyes

Ain't you cool? Now, let's shift gears and dive into the next challenge: retrieving content from a decentralized network.

## The Challenge:
Every meme (or any other file) you upload is instantly available for retrieval. In this exercise, your task is to fetch a text file from a public gateway using its root CID. The cool part? You can use any gateway, thanks to the decentralized nature of peer-to-peer networking. But for simplicity, we’ll use the `w3s.link` gateway.

## What You Need to Do:
1. Start by creating a new JavaScript file, ex6.mjs. 

2. Fetch the CID from `stdin`: The CID (Content Identifier) of the file you need to fetch will be provided via `process.stdin`. You’ll need to read this input first.
```js
import fs from 'node:fs'
import { CID } from 'multiformats'

const cid = CID.decode(fs.readFileSync(process.stdin.fd))
```
3. Construct the Gateway URL: Format the URL to fetch the content using the w3s.link gateway. The URL format is:
```js
https://w3s.link/ipfs/<CID>
```
Replace <CID> with the actual CID you decoded.
```js
const url = `https://w3s.link/ipfs/${cid}`
```
4. Fetch the Content: Use the fetch API to send an HTTP request to the gateway and retrieve the data.
```js
const res = await fetch(url)
```
5. Output the Content: Finally, write the fetched content directly to `process.stdout`.
```js
process.stdout.write(await res.text())
```

## What’s Happening Here?
**CID Decoding:** The CID you receive is in a compact binary form. You use the multiformats library to decode it into a human-readable string that you can use in the URL.
**Gateway Flexibility:** While we use w3s.link here, you can use any gateway that supports IPFS (InterPlanetary File System).
**Real-time Retrieval:** Once you have the CID, fetching content from a decentralized network is as simple as sending a request to a URL.

## Why This is Cool:
This challenge shows you how easy it is to retrieve content from a decentralized network. It’s like pulling a meme out of thin air—instant access, no matter where the file is stored on the network.

Now, create that ex6.mjs file, plug in your code, and see how seamlessly you can fetch content from the decentralized web. Happy coding! 🚀

**Next Steps:**
- Try fetching different types of content by changing the CID.
- Explore how different gateways work and compare their performance.

You’re doing great—keep pushing forward!


─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex6.mjs`
* For help run: `$ADVENTURE_NAME help`
