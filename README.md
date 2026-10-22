# Brighter Horizons

A cinematic, responsive, five-page informational website for Brighter Horizons, a company developing plans for group homes for adults with developmental disabilities.

## Development

Requires Node.js 24 for the build and Python 3 for the local server. No npm dependencies are required.

```sh
npm run dev
```

To preview the exact public build:

```sh
npm run build
python3 -m http.server 3001 --directory dist
```

## Pages

- `index.html`: cinematic home page and short introduction
- `about.html`: company story and mission
- `founder.html`: the founder’s personal story
- `approach.html`: planned homes and care commitments
- `values.html`: guiding principles

Each page works independently with shared CSS, JavaScript, and navigation. Content and navigation remain available without JavaScript. Motion respects the operating system's reduced-motion preference; visitors can also reduce motion with a footer control, remembered for the browser session.

## Assets and content

Fonts are self-hosted Latin subsets of Cormorant Garamond and Manrope, distributed under the included SIL Open Font License files in `assets/fonts`.

`assets/horizon-home.webp` is AI-generated concept imagery, not an existing Brighter Horizons property. Visible captions identify it as concept imagery. The original generated image is retained outside this repository. The site describes future plans rather than claiming operational homes, licensure, availability, or existing services. No contact details or credentials have been invented.

## Netlify

The repository is connected to Netlify at https://brighterhorizonsliving.netlify.app. Production updates come from `main`. `netlify.toml` supplies the build command (`npm run build`), Node version, and publish directory (`dist`). The site requires no environment variables or secrets.

Only public website files are copied to `dist`; the briefing deck, Git metadata, and development files are excluded. The generated build is ignored by Git.
