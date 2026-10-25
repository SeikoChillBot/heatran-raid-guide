# PokeMMO RAID ATLAS — English edition

English localization of the [French RAID ATLAS](https://github.com/SeikoChillBot/pokemmo-raid-guide-fr). Updated **October 25, 2026**. The French repository is the design and feature reference; the English site is an English **in-game terminology conversion**, not a machine-literal translation.

## Public pages and navigation

| Page | Content |
| --- | --- |
| `index.html` | Home with the six-boss permanent-raid artwork carousel (shuffled, next/previous and automatic rotation) and the event categories |
| `permanent.html` | Six permanent raid bosses; Heatran and Cresselia currently have guides |
| `heatran.html` | Three Heatran routes: Crimson Core, Beorns/JinxedBoon video variant and Cloud Five v0.74 |
| `cresselia.html` | Three selectable Cresselia routes: The Three Musketeers v2.1 (24 builds, 10 turns), Sensei / DoubleDude New Strategy (24 builds, 13 turns) and Latin Combo V2 (12-turn video reference) |
| `halloween.html` | Halloween editions and archive access |
| `halloween-2025.html` | All nine 2025 Halloween raid dossiers |
| `halloween-2025-raid.html?boss=<id>` | Interactive archived 2025 encounters including Pumpking and both Darkrai difficulties |
| `coming-soon.html` | Existing placeholders for planned events and raids |
| `design-lab.html` | Earlier visual study, retained outside public navigation |

The Halloween 2025 navigation, page titles and guide visibly say **“Likely outdated”**. These are archived event strategies, not verified current-year routes.

## Shared presentation

The English site follows the French site's approved **black / red / white / gray** design:
- The original French V6 CSS rules are retained in `assets/raid-redesign-v6-fr-parity-1.css` through `-7.css`.
- `assets/raid-guide-components-v6.css` and `assets/raid-components.js` provide canonical battle cards, Pokémon build cards and preparation components.
- `assets/raid-guide-template.js` and `assets/raid-command-center-v7.css` provide the unified, compact sticky panel containing Strategy, P1–P4 role selection, and Battle / Pokémon / Preparation / Mechanics tabs. Its Collapse button folds the *entire* control panel.
- All six permanent raid boss artworks rotate in the home hero; only documented guides are linked as available.

## English Pokémon terminology and preserved raid data

- `assets/official-pokemon-en.js` contains French-to-English Pokémon species, move, held-item, Ability and Nature pairs extracted from **PokéAPI language 5 (French) and language 9 (English)**.
- `assets/raid-en-localization.js` converts published builds to the official English names and conventional English EV/IV abbreviations.
- The source values, turn slots, team counts and strategy boundaries remain unchanged. No missing move, EV or IV is invented.
- `assets/cresselia-en.js`, `assets/cresselia-alternatives-en.js`, `assets/halloween-2025-data-en.js`, `assets/halloween-2025-rosters-en.js` and `assets/halloween-2025-raid-en.js` are the language-specific data and engine files.

**Cresselia limitation:** Latin Combo V2 is a 12-turn video strategy listed by community indexes, but its 24 builds and 48 exact actions were not independently verifiable from the available sources. It remains selectable with the original source reference and a clear warning. The Three Musketeers and Sensei have full builds and documented turn sequences.

**Halloween limitation:** The 2025 archive includes 9 bosses and 228 roster positions across the documented strategy modes. Some Halloween builds were *community team proposals* rather than confirmed strategies; the English edition preserves those warnings. Old versions may no longer work in later seasonal events.

## Deployment and verification

This is a static HTML/CSS/JavaScript project; deploy the HTML pages and the full `assets/` directory together. Existing original artwork remains embedded in the retained CSS where required. See [VALIDATION_EN.md](VALIDATION_EN.md).

Repository commits confirm source updates. They do **not** by themselves confirm a fresh Cloudflare Pages deployment or real browser/mobile testing; those should be checked after publishing.

Community project, unaffiliated with PokeMMO or The Pokémon Company.


## October 25, 2026 — French-approved visual V13 parity

The English site now uses the same released cosmetic modules as the French site: `raid-premium-v8.css`, `raid-polish-v9.css`, `raid-finish-v10.css`, `raid-atmosphere-v11.css`, `raid-polish-v12.css`, and `raid-polish-v13.css`. Every public page loads them in this order, after the unchanged shared base styling.

The Home page has the animated PokeMMO raid den integrated behind the Permanent Raids category artwork, no decorative 06/04/04 statistics strip, the `EXPLORE RAIDS` heading, the three most recently viewed raids, and an exclusive footer credit: **Created by Seiko (Seikolito in-game)**. That credit is not present on other pages.

The Permanent Raids category banner uses the same animated GIF with the less zoomed-in square framing as the French V13 stylesheet. In battle, Pokémon illustrations have transparent/blended treatment rather than hard black image squares. Shared combat cards place **Previous turn / Next turn** directly after the four actions, replacing the redundant Pokémon jump link.

Heatran, Cresselia and Halloween 2025 use English versions of the shared home/history logic, branding/active-tab styling, and detailed six-field Pokémon hover previews sourced from actual item, Nature, Ability, EV, IV and move data. Missing data are not fabricated.

The English page translations and official Pokémon names remain independent of the French-language data files. Historical Halloween warnings are retained. **Technical/static verification is not a real browser screenshot or deployment confirmation.**


## French V14 design parity — October 25, 2026

The approved French visual corrections have been applied to the English edition without replacing translated tactics:

- `assets/raid-polish-v14.css`: transparent Pokémon artwork in battle cards and a subtle, non-zoomed adjustment to the animated raid den crop.
- `assets/raid-components.js`: the shared action renderer upgrades PokeAPI sprites to official high-resolution transparent artwork. This is the default for future guides using the shared components.
- `assets/raid-premium-v8.js`: dynamically inserted Halloween / future action cards receive the same transparent artwork cleanup.
- All eight English HTML pages load the final V14 stylesheet; English interface copy and official English move/item/species names remain intact.
- Every page footer includes `Created by Seiko (Seikolito in-game)`, mirroring the French attribution.
- Static validations passed: scripts compile, 8 English pages include V14, Cresselia and Halloween build/turn counts match French. Real browser rendering and published site build still require visual acceptance testing.


## V15 — strategy and author attribution
The French site is the product baseline. All raid and event pages now use the same `assets/raid-strategy-sources-v15.js` and `.css` to show an accessible expandable source and author-credit panel at the bottom. The panel follows the selected strategy/boss only; use `window.RAID_ATLAS_SOURCE_CONFIG` on future guide pages. Website creator credit is separate from the original strategy authors. Cloud Five's original link is not verified and must not be invented. Detailed implementation notes live in `SeikoChillBot/GPT-DevSecret-Memory-/projects/POKEMMO_RAID_ATLAS.md`.
