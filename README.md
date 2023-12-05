# Swarm Donation web component

This is a simple widget that can be added to any HTML page. It renders an element that prints the time-to-live of the postage stamp that was used to upload the resource to the Swarm network, along with an arbitrary Ethereum address.

The component gives readers two options to support the author:

-   Sending tips to the Ethereum address
-   Topping up the postage stamp, lengthening the hosting

## Swarm network

Swarm is a peer-to-peer network of Bee nodes that collectively provide censorship resistant decentralised storage and communication services.

## Example Usage

Replace `<ethereumAddress>` and `<stamp>`. When built into static site generators, these steps should be handled automatically for the end user.

```
<div id="donation"></div>
<script src="https://cdn.jsdelivr.net/npm/swarm-donation@4.0.0"></script>
<script>
   renderSwarmDonation('donation', '<ethereumAddress>', '<stamp>')
</script>
```

## Recommended Usage

Upload the `js` file to the Swarm network, and refer that instead of the CDN.

## Etherjot

This web component is also available as an extension in [Etherjot](https://github.com/ethersphere/etherjot-web).
