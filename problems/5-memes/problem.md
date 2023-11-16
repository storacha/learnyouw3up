# Memes for my eyes

Any meme you upload is almost instantly available for retrieval. Other files also. Content is made available by root CID and by CAR shard CID. In this exercise you are going to fetch a text file from the public gateway by it's root CID and log it to the console.

You can use the `w3s.link` gateway to retrieve the data but the magic of decentralized peer to peer networking means that you should be able to use any gateway.

Create a _new_ file for your solution e.g. `ex6.mjs`.

To retrieve data from a gateway you should format the request like:

```
https://w3s.link/ipfs/<CID>
```

The CID of the data to fetch will be provided to `process.stdin`.

You should install the `multiformats` library from npm (`npm install multiformats`) to `decode` the CID from it's compact binary form and then format it as a string in the URL.

Finally send a HTTP request to fetch the content and write the data directly to `process.stdout`.

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify program.mjs`
* For help run: `$ADVENTURE_NAME help`
