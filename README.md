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
