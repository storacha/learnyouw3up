# Infinite avatar compression!

YAS BOSS! That's how you do it! 

Let's move on.
## What’s the Deal with Infinite Compression?
Imagine compressing your data over and over until it’s reduced to its absolute minimum size. While true infinite compression is more of a thought experiment, in this challenge, you’ll get a taste of it by working with Content-Addressed Archives (CARs) and Directed Acyclic Graphs (DAGs).
 
The DAG is packed into a CAR 🚗 - beep beep. CAR is kinda like a `tar` file but for DAGs. It's a useful container format for transferring content addressed data over HTTP.

**Here’s how it works:** when you upload a file, it gets split into smaller pieces called CAR shards. Each of these shards gets a unique identifier called a CID (Content Identifier). When you’ve uploaded all the shards, they come together to form a DAG—a super-organized structure that ties everything up neatly with a root CID.

## Your Task:
1. Start by creating a new file, like ex5.mjs.
2. Upload Content: You’ll upload a file—maybe another cat meme—just like you did before. But this time, the file gets split into multiple shards.
```js
const client = await Client.create()
const files = await filesFromPaths(['./awesome-cat-meme.jpg'])
```
3. Print Each Shard’s CID: As each shard is stored, you’ll print out its CID. Think of these as the pieces of your compression puzzle.
```js
const root = await client.uploadDirectory(files, {
  onShardStored: shard => console.log(shard.cid.toString())
})
```
4. Reveal the DAG Root: After all the shards are uploaded, print the CID of the root of the DAG. This is the final piece that ties everything together.
```js
console.log(root.toString())
```

## Why It’s Awesome:
**Efficiency:** You’re not just uploading data—you’re breaking it down and managing it in a super-efficient way.
**Organization:** The DAG structure helps keep your data neatly organized, and the CIDs act as a digital map to navigate it all.

## Next Steps:
**Run the Code:** Try running your code to see the CIDs of each shard and the final DAG root.
**Explore Further:** Think about how this structure could be used in larger projects or how you might expand on it.

Now, it’s your turn to dive into the world of infinite compression! Good luck, and have fun compressing! 🚀

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex5.mjs`
* For help run: `$ADVENTURE_NAME help`
