# Lets space out

Ok you’re rolling. You just installed the w3up! Give someone a high five.

The w3up is a UCAN enabled API and client libraries that help you build web3 native applications that store their data on IPFS and Filecoin...for much win!

IDK if you realised but you just generated your very own private key and printed out the corresponding public key. This is your identity on this _device_.

In this exercise your challenge is to setup a space where you can upload data to, and then use `console.log` to print it's DID.

Yes - each space has a DID as well!

Anyway, lets get started. Create a _new_ file for your solution e.g. `ex2.mjs`. Import the w3up library and create the client as before. Now, you need to create a space - a place you can upload data to...but wait, there's a catch. To make your space usable, you need to "provision" it. There's two options here. You can provision it with your account _or_ you can redeem a coupon. If you don't have a coupon or are unsure what to do, choose option 1.

## 1. Create a space and provision it using your own account.

First, login to your account:

```js
const myAccount = await client.login('your@email')

// wait for payment plan to be selected (there's a free option!)
await myAccount.plan.wait()
```

When you call login, the script will wait until you click on the link in the email. We also need to wait for a payment plan to be selected (there's a free option!).

Now use `createSpace` to, you guessed it, create a new space. Pass your account to have it provisioned automatically:

```js
// NOTE: pass your account for provisioning!
const space = await client.createSpace('my space', { account: myAccount })
```

Finally, log the DID of the space, for verification:

```js
console.log(space.did())
```

## 2. Create a space and provision it with a coupon.

```js
const space = await client.createSpace('my space')

// fetch the coupon
const res = await fetch('https://url-provided-to-you')
const data = new Uint8Array(await res.arrayBuffer())

// provision the space with the provided coupon
const access = await client.coupon.redeem(data)
await space.provision(access)

// save the space to the client's local storage
await space.save()

// optionally, create an account so you can access the space from another
// device (see below).
//
// click the link in the email, but selecting a payment plan is optional, 
// because the coupon is funding your space! \o/
const myAccount = await client.login('your@email')
// create a recovery delegation to your account
const recovery = await space.createRecovery(myAccount.did())
// store the recovery delegation with the w3up service provider
await client.capability.access.delegate({ space: space.did(), delegations: [recovery] })
```

Finally, log the DID of the space, for verification:

```js
console.log(space.did())
```

─────────────────────────────────────────────────────────────────────────────
* To print these instructions again, run: `$ADVENTURE_NAME print`
* To verify your program, run: `$ADVENTURE_NAME verify ex2.mjs`
* For help run: `$ADVENTURE_NAME help`
