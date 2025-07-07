# Infinite avatar compression!

YAS BOSS! That's how you do it! 

## What’s the Deal with Content Addressing?

So, here’s the scoop: when you upload data to Storacha, it gets transformed into a **Directed Acyclic Graph (DAG)**. Each piece of your data becomes a node, and each node gets a unique identifier called a **Content Identifier (CID)**. This whole DAG is then packed into a Content-Addressed Archive (CAR)—think of it like a digital suitcase for your data, ready to travel the web.

## How It Works:

When you upload a file, it’s broken down into smaller pieces called **CAR shards**. Each shard gets its own CID, making it easy to identify and retrieve.
After all the shards are uploaded, they come together to form the full DAG, with a root CID that ties everything together.

Here’s the best part: If the system already has the data you’re trying to upload, it’ll tell you so. No need to send the data again! It’s like magic—data management on autopilot! 🚗✨

## Your Task:

**1. Start by creating a new file, like `ex5.mjs`.**

**2. Upload Content**

You’ll upload a file—maybe another cat meme—just like you did before. But this time, the file gets split into multiple shards.

```js
const client = await Client.create()
const files = await filesFromPaths(['./awesome-cat-meme.jpg'])
```

**3. Print Each Shard’s CID**

As each shard is stored, you’ll print out its CID. Think of these as the pieces of your compression puzzle.

```js
const root = await client.uploadDirectory(files, {
  onShardStored: shard => console.log(shard.cid.toString())
})
```

**4. Reveal the DAG Root**

After all the shards are uploaded, print the CID of the root of the DAG. This is the final piece that ties everything together.

```js
console.log(root.toString())
```

## Why It’s Awesome:

**Efficiency:** You’re not just uploading data—you’re breaking it down and managing it in a super-efficient way.

**Organization:** The DAG structure helps keep your data neatly organized, and the CIDs act as a digital map to navigate it all.

**No Redundant Uploads:** Thanks to content addressing, if the data already exists, you don’t need to send it again—saving time and bandwidth.

## Next Steps:

**1. Run the Code:** Try running your code to see the CIDs of each shard and the final DAG root.

**2. Explore Further:** Think about how this structure could be used in larger projects or how you might expand on it.

Now, it’s your turn to dive into the world of infinite compression! Good luck, and have fun compressing! 🚀

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex5.mjs`
* For help run: `$ADVENTURE_NAME help`
