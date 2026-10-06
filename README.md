# geomedialab-website

Source for [geomedialab.org](https://geomedialab.org), the website of the Geomedia Lab at Concordia University. Built with [Eleventy](https://www.11ty.dev/) and edited through [Sveltia CMS](https://github.com/sveltia/sveltia-cms) at [geomedialab.org/admin/](https://geomedialab.org/admin/). Every save in the admin panel is a commit to the `11ty-site` branch, which rebuilds and republishes the site in about a minute.

## Editing the site

### Logging in

1. You need a GitHub account with write access to `geomedialab/geomedialab-website` (ask Sébastien Caquard).
2. Create a **classic** personal access token at [github.com/settings/tokens](https://github.com/settings/tokens) → *Generate new token (classic)*. Tick the **`repo`** and **`read:user`** scopes, set an expiry, and copy the token.
3. Go to [geomedialab.org/admin/](https://geomedialab.org/admin/), choose **Sign in with GitHub using token**, and paste it. Your browser remembers it until you log out.

### What you can edit

| In the admin panel | What it is | Where it shows up |
|---|---|---|
| **Projects** | One page per project, with a cover image | The horizontal gallery at the top of the home page. *Gallery position* sets the order (lower first). *Cover focus* picks which part of the image stays visible when the card crops it. |
| **News** | Short news items: just an image and a title, or a full text post | The column beside *About* on the home page (latest 4), and the News page |
| **Team** | One entry per person: photo, role, bio, current or alumni | The Team page |
| **Pages** | Ordinary pages (Publications, Contact, …) | The top menu and/or footer, depending on *Menus* |
| **Home page** | The About, Partnerships and land acknowledgement text | The left column under the gallery |

Text is written in [Markdown](https://www.markdownguide.org/cheat-sheet/). The editor has a toolbar, so you rarely need to type Markdown by hand. Images you upload go into the shared media library and can be reused anywhere. Two or more images placed one after the other, with no blank line between them, are shown side by side.

Page addresses come from the title: a project titled *Lake Huron Treaty Atlas* lives at `/en/projects/lake-huron-treaty-atlas/`. Changing a title changes its address.

## Developing

```sh
npm ci
npm start          # dev server with live reload on http://localhost:8080
npm run build:prod # writes the site to public/
```

Pushing to `11ty-site` runs `.github/workflows/build-and-deploy.yml`, which builds the site and publishes `public/` to the `gh-pages` branch.

- Content lives in `src/content/{projects,posts,people,pages}/<slug>/<slug>.md`. Each entry needs its own folder, because the CMS expects one. Default tags and layouts come from the `*.json` file in each of those folders.
- Old addresses from the hand-made site (`team.html`, `cicada.html`, …) keep working through redirect stubs listed in `src/_data/legacyRedirects.json`.
- Analytics: [geomedialab.goatcounter.com](https://geomedialab.goatcounter.com/).
- Contact map: MapLibre with the `survey-quiet` style from [basemaps.maphouse.ca](https://basemaps.maphouse.ca/), on keyless OpenFreeMap tiles.
- The framework is shared with [atlascine.org](https://github.com/geomedialab/atlascine-website) and bum.bike. The site is English-only for now, and French can be switched on later; `src/admin/config.yml` explains how.
