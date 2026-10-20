# Kushaal Pelluru - Portfolio

A static, dependency-free site: `index.html`, `styles.css`, `script.js`, `data.js`, `assets/`.

## Edit content
- **Projects** → `data.js`. Each entry powers a card and its detail popup (context / what I did / outcome).
  `cats` drives the filter chips; `cover` picks a color: `green | clay | ink | sage | sand`.
- **Hero, Approach, Career, About, Contact** → `index.html`.
- **Palette & fonts** → tokens at the top of `styles.css`.
- **Résumé** → add `assets/resume.pdf`, then restore the nav button and the Contact link.
  (Left out of the deploy on purpose - the current PDF carries a phone number.)
- **Logos** → `assets/logos/`. Flattened to one tone on the page, so full-colour files are fine.
  Project cards map to them via `logo:` in `data.js`; career logos are in `index.html`.
- **Photo** → `assets/portrait.webp` (real background kept, cropped to torso, fills the About panel).

The Snake "unlock my email" game is parked in `extras/email-game/`, with its own README.

Projects are deep-linkable: `yoursite.com/#project/seatsense`.

## Preview locally
```bash
python3 -m http.server 5173
```
Then open http://localhost:5173.

## Deploy
Live at **https://kushaalpelluru.github.io** via GitHub Pages.
Push to `main` and it redeploys - no build step.

```bash
git add -A && git commit -m "Update" && git push
```

`.gitignore` keeps `extras/` and `assets/resume.pdf` off the public site.
