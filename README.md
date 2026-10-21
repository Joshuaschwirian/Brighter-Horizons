# Brighter Horizons

A responsive informational website for Brighter Horizons, a company developing plans for group homes for adults with developmental disabilities.

## Run locally

Requires Python 3. From the repository root:

```sh
npm run dev
```

Or run `python3 -m http.server 3000 --bind 0.0.0.0` directly. No dependency installation or build is needed. Deploy the repository as a static site on a hosting provider that supports HTML, CSS, JavaScript, and SVG assets.

## Content

The site intentionally describes future plans rather than claiming operational homes, licensure, availability, or existing services. No contact information, location, or credentials have been invented. Add verified public contact details when available. The home illustration is original SVG artwork, labeled as illustrative rather than an existing property.

## Deploy to Netlify

Import `Joshuaschwirian/Brighter-Horizons` from GitHub in Netlify. The committed `netlify.toml` supplies the build command (`npm run build`), Node version, and publish directory (`dist`). No environment variables or credentials are needed by the website. Netlify will assign an HTTPS `netlify.app` address after a successful deployment. A custom domain can be connected later.

To verify the deployment output locally:

```sh
npm run build
python3 -m http.server 3001 --directory dist
```

Only public website files are copied to `dist`; the briefing deck, repository metadata, and development files are not published.
