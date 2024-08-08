# Infinite avatar compression!

YES BOSS! That's how you do it. Now your minions can do tasks on your behalf. They can even re-delegate to others! It's delegations all the way down.

One thing to note about delegations is that they're not secrets, they can only be used by the target "audience" - in this case the DID of the workshop. So you can embed in scripts and/or send them in emails or whatever really. They're just a proof that you have been given the capability to do something.

Ok, moving on. We talked about content addressing a couple of exercises ago. Right? Yeah well that content addressed data that you uploaded is now a DAG. Yeah, a DAG - Directed Acyclic Graph. So I don't know if you know anything about hashing but the CID you received is no ordinary hash. It's a CID that addresses a graph of _many_ nodes each with their _own_ CID...and with this one very special property - no cycles. Cool huh?! Fun fact: the CID you have is the CID of the root node of the graph. It's the hash of the node's data **and** any links it has to other nodes.

The DAG is packed into a CAR 🚗 - beep beep. jk jk a CAR is a Content-Addressed Archive. It's kinda like a `tar` file but for DAGs. It's a useful container format for transferring content addressed data over HTTP.

In web3.storage, we content address CARs as well! So we generate a hash for the CAR and invoke a `store/add` capability, passing the CAR CID as parameters to the invocation. The service will reply with a signed URL - a place to put the CAR that will only accept data that hashes to the CID of the CAR.

**BUT** if we know the CAR you want to send has already been stored then we'll send back a flag to say that you don't need to send it! Hey presto, infinite compression! Joking aside, isn't content addressing awesome?!

I know loads of text, but one more thing, sometimes y'all got big datas. If the datas are big, we split the DAG across multiple CAR files. In this exercise we're going to store something else and log out the CAR CIDs a.k.a. the CID of the CAR _shards_.

Create a _new_ file for your solution e.g. `ex5.mjs` and upload something like you did in the cat memes exercise. This time though, print out the CIDs of the CAR shards as they are sent, and then _finally_ the CID of the root of the DAG. Your output is expected to be newline delimited.

Good luck!

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex5.mjs`
* For help run: `$ADVENTURE_NAME help`
