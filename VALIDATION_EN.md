# RAID ATLAS EN — Validation and parity checklist

Checked against `SeikoChillBot/pokemmo-raid-guide-fr` on **October 25, 2026**.

Two types of validation are distinguished below: **static/source checks already completed** and **browser / game checks still requiring execution**. A successful GitHub push does not establish that Cloudflare Pages is deployed.

## Static checks completed

- [x] All eight public French-page equivalents are in the English repository: Home, Permanent Raids, Heatran, Cresselia, Halloween category, Halloween 2025 category, Halloween 2025 raid detail and Coming Soon.
- [x] The French V6 visual stylesheet set is copied into seven byte-preserving English CSS parts and linked from all eight pages.
- [x] Heatran, Cresselia and Halloween 2025 raid details load the shared V7 compact sticky control panel (Strategy, P1–P4 and navigation; Collapse / Expand).
- [x] Cresselia: The Three Musketeers = 24 builds, 10 turns; Sensei / DoubleDude = 24 builds, 13 turns; Latin Combo V2 = video reference for 12 turns. The last is not misrepresented as 24 verified builds.
- [x] Halloween 2025: same nine bosses and same 228 documented roster positions as French repository.
- [x] Official Pokémon move/item/Ability/Nature/species translation dictionary uses PokéAPI FR and EN naming; EV/IV notation normalized to English.
- [x] Halloween 2025 archive status is prominently described as “Likely outdated” in the English pages.
- [x] All local linked public HTML and asset paths checked against tracked repository files; no missing references found.
- [x] Inline page scripts, external JavaScript modules and the CSS wrappers passed syntax checks.
- [x] English accessible labels, page descriptions, boss locations, mode names, source warnings and remaining build notes reviewed.

## Browser acceptance — still to confirm after deployment

- [ ] Home boss art carousel auto-rotates through six bosses; Back/Next, pause on hover, and reduced-motion settings work.
- [ ] Home, Permanent Raids, Halloween and Coming Soon links navigate to the expected pages.
- [ ] Compare French and English screenshots at desktop widths and at 920 px, 640 px and 365 px; verify readable cards and artwork clipping.
- [ ] Heatran: switching Crimson Core, Beorns / JinxedBoon and Cloud Five changes all 4-player battle actions, build cards, phases and checklists without visual divergence.
- [ ] Heatran: Copy Turn, Copy Build, Full View, previous/next and all four shared tabs function correctly.
- [ ] Cresselia: switching all three strategies updates turn counts and data correctly; no missing tabs, crashes or French move names.
- [ ] Cresselia: P1–P4 changes roster details; Sensei's 13-turn sequence follows the source and the Latin Combo incomplete-source notice is visible.
- [ ] Halloween 2025: all nine boss routes load, including Pumpking Easy/Hard, Darkrai 4★/5★, and proposed-build warnings.
- [ ] V7 raid command panel remains sticky without hiding the guide; Collapse hides all its controls and Expand restores them, on mobile as well as desktop.
- [ ] Clipboard, player role highlight and preparation checklist persistence work as intended.
- [ ] Confirm the live Cloudflare deployment uses the same commit/version as GitHub; do not assume automatic deployment.

## In-game verification — not claimed

- [ ] Test actual PokeMMO moves, abilities, item interactions, target selection, Speed order, boss HP thresholds and turn order against current game mechanics.
- [ ] Verify unresolved source ambiguities, especially the Sensei P4 Krookodile/Tyranitar discrepancy and Latin Combo exact builds.

The source may be complete while gameplay remains untested. Archive warnings and unspecified build fields must never be silently removed.
