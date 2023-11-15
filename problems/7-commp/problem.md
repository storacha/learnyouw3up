# CommP at the edge or die trying

Great job 👏 You are smashing it. Keep on truckin'.

So, there's this crypto incentivized, decentralized file storage network called Filecoin. It's built on top of IPFS protocols and provides data storage for content addressed data. Maybe you heard of it?

As you know, when you upload data using w3up you generate a DAG and a corresponding root CID. You also now know that w3up packs the DAG into 1 or more CAR files (shards). What you might _not_ know is that w3up also computes a **Piece CID** for each shard.

You can think of a piece CID as an alias for a shard. It is the primary means of addressing data that has been stored in deals made with Filecoin Storage Providers (SPs).

When you upload data, the w3up client "offers" piece CIDs for filecoin deals. It invokes a `filecoin/offer` capability.

Filecoin deals are like huge shipping containers, you need to fill them up!

Your data makes it's way through the _aggregation_ pipeline. Asynchronous tasks referenced in signed UCAN receipts make it possible to follow your piece through the pipeline, providing access to **inclusion proofs** and eventually all the way to a **data aggregation proof**, which is a proof that your piece is included in an aggregate piece, _and_ is present in a deal with a Filecoin SP.

It can take a while for aggregation to happen and for deals to be negotiated so in this exercise we'll fetch Filecoin deal information for a pre-canned piece CID.

Create a _new_ file for your solution e.g. `ex8.js` and use the `client.capability.filecoin.info()` method to query deal information. A piece CID you can use is `bafkzcibcaycsfehfpywo35zgvilhaqegcsrslebar6vcnwvzi64fljvwdrhvqei`.

Use `dag-json` to encode the output and write the bytes to `process.stdout`.

```sh
# for parsing the piece CID above
npm install @web3-storage/data-segment
# for encoding the output
npm install @ipld/dag-json
```

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify program.js`
* For help run: `$ADVENTURE_NAME help`
