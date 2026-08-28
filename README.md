# EspositoLabs

Marketing/storefront site for EspositoLabs — software and plugins for game
animation pipelines. First product: **MasterAssets**.

Plain static HTML/CSS/JS, no build step. Checkout is handled by
[Lemon Squeezy](https://lemonsqueezy.com) (hosted checkout overlay).

## Structure

```
index.html                    Homepage
products/masterassets.html    MasterAssets product page + buy button
legal/terms.html               Terms of Service
legal/privacy.html             Privacy Policy
legal/refund-policy.html       Refund Policy
assets/css/style.css           Shared styles
assets/js/main.js              Shared JS (mobile nav toggle)
404.html                       GitHub Pages 404 page
```

## Deploying with GitHub Pages

1. Push this repo to GitHub (if not already).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`.
4. Save. The site will be live at `https://<username>.github.io/<repo>/`.

## Connecting your custom domain

1. In **Settings → Pages → Custom domain**, enter your domain (e.g.
   `espositolabs.com`) and save. GitHub will create a `CNAME` file at the
   repo root automatically — commit it if it doesn't get committed for you.
2. At your domain registrar / DNS provider, add:
   - For an apex domain (`espositolabs.com`): four `A` records pointing to
     GitHub Pages' IPs — `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`.
   - For a `www` subdomain: a `CNAME` record pointing to
     `<username>.github.io`.
3. Back in **Settings → Pages**, once DNS propagates, enable **Enforce HTTPS**.

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
