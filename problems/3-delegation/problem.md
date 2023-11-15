# Delegation, invocation and procrastination

Excellent cat gifs. Well done you.

Now, lets talk UCAN.

UCANs are like JWTs with super powers. They’re an essential component in decentralized authorization. They use public key cryptography - so whenever you create a UCAN you _sign it_ with your private key.

The best thing about UCANs is that you can provably delegate "capabilities" that allow others to act on your behalf, without ever sharing your private key.

In this exercise, you're going to delegate an `upload/list` capability to the workshop. Behind the scenes the workshop will create it's own private key, and pass it's public key (it's DID) to you on `stdin`.

Your program should read from `process.stdin`, create a delegation for the `upload/list` capability and write it to `process.stdout`. So, something like this:

```
DID => your program => delegation
```

Then the workshop will be able to **invoke** the capability to list the items _you've_ uploaded to _your_ space. It'll verify it can find that cat gif you uploaded in the previous exercise.

You can read and parse the DID from `stdin` like so:

```js
import fs from 'node:fs'
import * as DID from '@ipld/dag-ucan/did'

const data = fs.readFileSync(process.stdin.fd, 'utf-8')
const principal = DID.parse(data)
```

Create a _new_ file for your solution e.g. `ex4.js` and use the client to create a delegation for `upload/list` to the provided DID. Create an archive of the delegation and write it to `process.stdout`.

One last thing, make sure the delegation remains valid for **more than one hour**.

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify program.js`
* For help run: `$ADVENTURE_NAME help`
