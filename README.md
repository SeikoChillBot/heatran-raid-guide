# PokeMMO Raid Atlas — English edition

English localization of the [French Raid Atlas](https://github.com/SeikoChillBot/pokemmo-raid-guide-fr), with the same visual identity, page hierarchy, artworks, features and raid strategy data. Last synchronized with the French prototype: October 24, 2026.

## Website pages

- `index.html` — landing page with four event categories.
- `permanent.html` — six permanent raids; Heatran available and five future raid guides.
- `heatran.html` — interactive four-player Heatran raid guide.
- `coming-soon.html?event=...` — context-sensitive pages for upcoming events and raids.
- `design-lab.html` — the original Raid Atlas design study translated to English; not part of the production navigation.

This is a static HTML/CSS/JavaScript website with no build step. Keep the `assets/` folder alongside the HTML files when deploying to Cloudflare Pages or another static host.

## Feature parity

The English edition retains:

- The approved graphite/white/red Raid Atlas design, responsive layout and animations.
- Identical navigation: Home → Permanent Raids → Heatran; separate Coming Soon pages.
- Both Heatran options: **Crimson Core (recommended)** and **Beorns / JinxedBoon (video variant)**.
- Four player positions and six Pokémon per player, for a total of 48 strategy-specific Pokémon builds.
- Six phases per strategy, with all 12 turn-by-turn commentaries, battle actions and conditional notes.
- Twelve shared Heatran mechanics cards and two side-by-side strategy comparisons.
- Preparation checklists, expandable builds, full-turn view, source links and clipboard feedback.

English in-game species, moves, abilities, items, natures and status notes follow the source data; the rotations and timing distinctions are unchanged.

## About the strategies

The Beorns/JinxedBoon option follows the **two-Xatu video variant**, not the separate, updated PDF variant that uses P3 Xatu + P4 Pelipper. Their builds and timings must not be combined casually. Crimson Core requires Magmortar on Heatran's right; the Beorns PDF requires Magmortar present without explicitly mandating a side. See the original sources in the footer of `heatran.html`.

## Sources and visual assets

- [Crimson Core — Heatran Raid (Octillery strategy)](https://www.crimsoncoremmo.co.uk/guides/crimson-core-guides-heatran-raid-octillery-strat)
- [Beorns / JinxedBoon — Heatran Octillery strategy](https://docs.google.com/document/d/1iZ0YhbEQntdbdRrBzSGR3PLiYkZSc0P962_3N_dnc_E/mobilebasic)
- Pokémon artworks are linked to PokeAPI's sprite repository, as on the French site.

All seven CSS files preserve the approved French visual rules. To keep the legacy background imagery identical without introducing missing binary assets, the three existing WebP images are embedded losslessly as base64 data in `assets/raid-hub.css` and `assets/heatran-theme.css`. The decoded images match the French source.

## Validation and deployment

Run the checks in [VALIDATION_EN.md](VALIDATION_EN.md) after deploying. GitHub source commits alone do not confirm that a Cloudflare Pages manual deployment has taken place. The repository files have passed static and simulated-DOM checks, but mobile/desktop browser rendering and live game outcomes still require verification.

This is an unofficial community project. PokeMMO and Pokémon belong to their respective rights holders.
