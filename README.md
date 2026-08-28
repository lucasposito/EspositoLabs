# EspositoLabs

Marketing/storefront site for EspositoLabs - software and plugins for game
animation pipelines. First product: **MasterAssets**.

Plain static HTML/CSS/JS, no build step. Checkout is handled by
[Lemon Squeezy](https://lemonsqueezy.com) (hosted checkout overlay).

## Updating the MasterAssets buy button

The buy button on `products/masterassets.html` links directly to the Lemon
Squeezy checkout URL:

```
https://espositolabs.lemonsqueezy.com/checkout/buy/542d8ec3-f21c-427c-9ae6-93fca1df780a
```

If you change the product/variant in Lemon Squeezy, update that `href` (and
the matching link in `index.html` if you add more direct buy links).

## Adding a new product

1. Duplicate `products/masterassets.html` as a starting point.
2. Update the copy, price, features, and Lemon Squeezy checkout link.
3. Add a new `.product-card` block to `index.html` linking to the new page.
