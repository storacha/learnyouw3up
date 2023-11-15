# DUDE, WHERE'S MY CAR?

We talked about CARs earlier. We're going to talk some more now.

A CAR file contains a DAG, a collection of nodes created from your data. There's loads of benefits to this - for example, you can retrieve sub-graphs and fetch different nodes from different peers, spreading the load and optimising speed.

However, when you access data from a gateway, IPFS fetches the nodes of the graph, verifies their individual hashes, re-assembles the file and sends it to you over HTTP.

You receive a bunch of bytes, but the problem is you can't verify those bytes correspond to your CID, without transforming them back into a DAG 🙈.

...and then, guess what, there's not just one way to build a DAG!

So even if you did build a new DAG, you may not be using the same settings as whoever built it in the first place and you might come up with a different CID to the one you accessed the content with!

One answer is to move the re-assembily from DAG to file into the client - the entity requesting the data. This removes the trust element as the client can now verify the hashes of the nodes in the graph.

In this exercise you're going to fetch a CAR file from a "trustless" gateway (I know that sounds bad but actually it's good!) and re-assemble it into a file.

Create a _new_ file for your solution e.g. `ex7.js`. You're going to need a couple of libraries, one for reading CARs and one for exporting files from an IPFS DAG:

```sh
npm install @ipld/car
npm install ipfs-unixfs-exporter
```

You can fetch a CAR from the web3.storage trustless gateway like this:

```
https://dag.w3s.link/ipfs/<CID>?format=car
```

The data to fetch is in a directory with the CID: `bafybeifdnnn35jnwel2dno7hu7zfew6gtxhkaynaszuj4i77j4m7wsv72a`. The path to extract is `/cat2.txt`.

Fetch the CAR file, then give it to a CAR reader. You'll need to create a simple adapter over the CAR reader that you can give to the `exporter` for extracting the data.

Hint - these docs might come in helpful:
* https://npm.im/@ipld/car#async-carreaderfrombytesbytes
* https://npm.im/ipfs-unixfs-exporter#exportercid-blockstore-options

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify program.js`
* For help run: `$ADVENTURE_NAME help`
