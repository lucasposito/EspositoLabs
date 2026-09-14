# EspositoLabs

Marketing/storefront site for EspositoLabs - software and plugins for game
animation pipelines. First product: **MasterAssets**.

Plain static HTML/CSS/JS, no build step. Checkout is handled by
[Paddle](https://paddle.com) (hosted checkout overlay via Paddle.js).

## Updating the MasterAssets buy button

`products/masterassets/index.html` initializes Paddle.js in `<head>` with a
client-side token, and the buy button opens the overlay checkout via
`Paddle.Checkout.open({ items: [{ priceId, quantity: 1 }] })` using the Price
ID set in the `tiers.commercial.priceId` field of that page's inline script.

If you change the product/price in Paddle, update:
- `REPLACE_WITH_PADDLE_CLIENT_TOKEN` in the `Paddle.Initialize(...)` call (one
  token for the whole site).
- `REPLACE_WITH_PADDLE_PRICE_ID` in the `tiers.commercial` entry.
- `Paddle.Environment.set("sandbox")` -> `"production"` once you're ready to
  take real payments (or remove the call entirely, since production is the
  default environment).

## Adding a new product

1. Duplicate `products/masterassets/index.html` as a starting point.
2. Update the copy, price, features, and Paddle Price ID.
3. Add a new `.product-card` block to `index.html` linking to the new page.
