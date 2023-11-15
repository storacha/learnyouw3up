# Introdcution: UCAN do it!

Welcome! We learn you the w3up now.

This workshopper is a set of interactive challenges to help you learn about
w3up.

Let's get you setup. You're gonna need Node.js installed (v18+) and the client
library installed. Once Node.js is installed, make a new directory, and install
the client library like so:

```sh
mkdir learnyouw3up
cd learnyouw3up
npm install @web3-storage/w3up-client
```

Nice one. Now, this is how things are going to work. You make a JS file for
each exercise in the directory you installed the library e.g. `ex1.mjs`.
You write the code that solves the problem, and then the workshopper will
verify your solution when you type: `learnyounode verify ex1.mjs`.

When you succeed, you type learnyouw3up again and select the next exercise.

Rinse and repeat for each excercise. Got it? Good.

Ok, now I need you to make that JS file we talked about. For this exercise
we're going to print out your DID. Yeah, like an ID, but DECENTRALIZED. Woof.

Put these JavaScripts into your file:

```js
import * as Client from '@web3-storage/w3up-client'
const client = await Client.create()
console.log(client.did())
```

When you're done, verify your solution with `learnyouw3up verify ex1.mjs`
and then type `learnyouw3up` and select the next exercise.

Go now, I believe in you.

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify program.mjs`
* For help run: `$ADVENTURE_NAME help`
