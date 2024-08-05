# Delegation, invocation and procrastination

Excellent cat gifs. Well done you.

Now, lets talk UCAN.

**What are UCANs?**
UCANs (User Controlled Authorization Networks) are like supercharged passwords. They’re used for secure, decentralized authorization. When you create a UCAN, you sign it with your private key, kind of like signing a document with your unique signature.

**What are UCANs cool?**
The best thing about UCANs is that you can securely give permission to others to do things on your behalf without sharing your private key. This is called "delegation."

**Your Mission**
In this exercise, you're going to delegate an upload/list capability to the workshop. The workshop will create its own private key and pass its public key (DID) to you through stdin (standard input).

Your program should read from `process.stdin`, create a delegation for the `upload/list` capability and write it to `process.stdout`. So, something like this:

```
DID => your program => delegation
```

Then the workshop will be able to **invoke** the capability to list the items _you've_ uploaded to _your_ space. It'll verify it can find that cat gif you uploaded in the previous exercise.

One last thing, make sure the delegation remains valid for **more than one hour**.


**Steps to complete the task**
**1. Create new file and read DID from stdin**
Create new file, like `ex4.mjs` and then you can read and parse the DID from 'process.stdin':
```js
import fs from 'node:fs'
import * as DID from '@ipld/dag-ucan/did'

const data = fs.readFileSync(process.stdin.fd, 'utf-8')
const principal = DID.parse(data)
```
**2. Create the delegetion**
Use the client to create a delegation for upload/list to the provided DID:
```js
import * as Client from '@web3-storage/w3up-client';
```
Create the client and set the expiration time for the delegation:
```js
const client = await Client.create();
const twoHours = 1000 * 60 * 60 * 2; // Two hours in milliseconds
```
In the example above, it is set to two hours.
**3. Generate the delegation**
Create the delegation for the upload/list capability:
```js
const delegation = await client.createDelegation(principal, ['upload/list'], {
  // Expiration is in seconds from Unix epoch
  expiration: Math.round((Date.now() + twoHours) / 1000),
});
```

**4. Archive the delegation**
Archive the delegation and handle any errors:
```js
const { ok: archive, error } = await delegation.archive();
if (!archive) {
  throw new Error('Failed to create delegation archive', { cause: error });
}
```

**5. Output the delegation**
Write the delegation to `process.stdout`:
 ```js
 process.stdout.write(archive);
 ```
─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex4.mjs`
* For help run: `$ADVENTURE_NAME help`
