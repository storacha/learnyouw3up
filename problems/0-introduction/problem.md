# Introdcution: UCAN do it!

Welcome! We learn you the w3up now.

This workshopper is a set of interactive challenges to help you learn about w3up.

Let's get you setup. Make a new directory, and install the client library like so:

```sh
mkdir $ADVENTURE_NAME
cd $ADVENTURE_NAME
npm init -y
npm install @web3-storage/w3up-client
```

Nice one. Now, this is how things are going to work. You make a JS file for each exercise in the directory you installed the library e.g. `ex1.mjs`. You write the code that solves the problem, and then the workshopper will verify your solution when you type: `$ADVENTURE_NAME verify ex1.mjs`.

When you succeed, you type `$ADVENTURE_NAME` again and select the next exercise.

Rinse and repeat for each exercise. Got it? Good.

Ok, now I need you to make that JS file we talked about, and call it `ex1.mjs`. For this exercise we're going to print out your DID. Yeah, like an ID, but DECENTRALIZED. Woof.

Put these JavaScripts into your file:

```js
import * as Client from '@web3-storage/w3up-client'
const client = await Client.create()
console.log(client.did())
```

When you're done, verify your solution with `$ADVENTURE_NAME verify ex1.mjs` and then type `$ADVENTURE_NAME` and select the next exercise.

Go now, I believe in you.

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex1.mjs`
* For help run: `$ADVENTURE_NAME help`
