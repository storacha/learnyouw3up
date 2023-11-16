# Lets space out

Ok you’re rolling. You just installed the w3up! Give someone a high five.

The w3up is a UCAN enabled API and client libraries that help you build web3 native applications that store their data on IPFS and Filecoin...for much win!

IDK if you realised but you just generated your very own private key and printed out the corresponding public key. This is your identity on this _device_.

In this exercise your challenge is to setup a space where you can upload data to, and then use `console.log` to print it's DID.

Yes - each space has a DID as well!

Anyway, lets get started. Create a _new_ file for your solution e.g. `ex2.mjs`. Import the w3up library and create the client as before. Now, lets use `createSpace` to, you guessed it, create a new space:

```js
const space = await client.createSpace('my space')
```

To make your space usable, you need to set it up with a storage provider. We call this _provisioning_. There's two options here:

## 1. Provision it using your own account.

```js
const myAccount = await client.login('your@email')

// wait for payment plan to be selected
while (true) {
  const res = await myAccount.plan.get()
  if (res.ok) break
  console.log('Waiting for payment plan to be selected...')
  await new Promise(resolve => setTimeout(resolve, 1000))
}

// provision the space
await myAccount.provision(space.did())
```

When you call login, the script will wait until you click on the link in the email. We also need to wait for a payment plan to be selected.

## 2. Provision it with a coupon.

```js
// fetch the coupon
const res = await fetch('https://url-provided-to-you')
const data = new Uint8Array(await res.arrayBuffer())

// provision the space with the provided coupon
const access = await client.coupon.redeem(data)
await space.provision(access)

// optionally, create an account so you can access the space from another
// device (see below).
//
// click the link in the email, but selecting a payment plan is optional, 
// because the coupon is funding your space! \o/
const myAccount = await client.login('your@email')
```

Once provisioned, it's a really good idea to setup recovery, so that when you move to a different device you can still access your space:

```js
await space.createRecovery(myAccount.did())
```

Finally, save the space and logged its DID, for verification:

```js
await space.save()
console.log(space.did())
```

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify program.mjs`
* For help run: `$ADVENTURE_NAME help`
