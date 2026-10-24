# English Raid Atlas — acceptance checklist

Synced with the French prototype on October 24, 2026. Redeploy all four HTML files and the whole `assets/` folder on Cloudflare Pages before browser testing. These boxes are intentionally left unchecked until a real browser test.

## Raid Atlas design and hierarchy
- [ ] Approved graphite/white/red design matches the French site; this is not a separate redesign.
- [ ] Home has the Heatran hero and exactly four event categories, not the permanent raid roster.
- [ ] Permanent Raids has six Pokémon dossier cards with the same destinations.
- [ ] Coming Soon updates title, art and back link for each event query.
- [ ] Heatran keeps its familiar tabs, four players, strategies, navigation and copying controls.
- [ ] Check 390px, 760px and desktop widths for overlapping Pokémon artwork and card layouts.
- [ ] Raid Atlas CSS loads after legacy styles, without returning to the earlier blue background.
- [ ] Design Lab remains a separate visual study, not the public homepage.

## Home and raid index
- [ ] Four event links work: Permanent Raids, Halloween, Christmas and Lunar New Year.
- [ ] Pokémon art is sharp and properly cropped.
- [ ] Labels, cards and typography align on mobile and desktop.
- [ ] Six permanent raids are listed; Heatran works and five show Coming Soon.
- [ ] Placeholder pages return to their correct parent category.

## Heatran navigation
- [ ] All breadcrumbs Home → Permanent Raids → Heatran are navigable.
- [ ] No duplicate back button sits directly below the Heatran breadcrumbs.
- [ ] Original strategy sources open in a new tab.

## Battle and strategy selection
- [ ] Switching Crimson Core and Beorns video updates battle actions, notes and selected strategy.
- [ ] Crimson Core requires Magmortar to Heatran's right without requiring Torkoal on the left.
- [ ] Beorns requires Magmortar present but does not invent a mandatory side from the PDF.
- [ ] Six commented phases are visible for each of the two strategies.
- [ ] Beorns video turn 2 uses P1 Pelipper/P2 Gliscor/P3–4 Nidoking; turn 3 uses two Octillery/two Xatu.
- [ ] Beorns video variant is not merged with the updated Xatu + Pelipper PDF variant.
- [ ] Crimson turn 2 explains that Roar may force a switch without four second-wave KOs.
- [ ] Beorns turns 5–6 provide conditional player-specific notes for rain, KOs and remaining Pokémon.
- [ ] Full six-turn view and single-phase view navigate correctly.

## Pokémon builds and preparation
- [ ] Each of four players can view six builds and use Expand all.
- [ ] Items, natures, abilities, EVs, priority IVs, moves and alternatives appear in English.
- [ ] Pelipper, Kingdra, Politoed and Flygon IVs distinguish confirmed and supplementary source advice.
- [ ] Unconfirmed P1 Pelipper video EVs/IVs/nature are labeled; P2/P4 Pelipper requirements stay distinct.
- [ ] Crimson P3 Xatu permits any nature with high SpD preferred.
- [ ] Beorns P1 Starmie has Modest/Rash/Mild and 252 SpA/252 SpD.
- [ ] Beorns P1 Kingdra has 252 SpA/252 SpD baseline; the 252/64/192 Sniper/Splash Plate test is optional.
- [ ] Preparation checklist selection persists across tabs.
- [ ] Beorns field HM options are expandable and not mistaken for battle moves.

## Mechanics and copying
- [ ] All six HP thresholds and key effects (Roar, Defog, rain, Fake Tears, Brine) are explained.
- [ ] Two strategy comparison cards show which strategy is selected.
- [ ] All twelve shared mechanic cards remain present.
- [ ] Copy this turn and Copy build contain English Pokémon and move names.
- [ ] Copy-success feedback appears and resets.
- [ ] Mobile controls remain accessible without hidden text or overflow.
- [ ] Pre-battle reset messages differ correctly by source and do not claim a false Beorns side requirement.

Static and simulated DOM tests are documented in the accompanying README. They do not replace real-world mobile/desktop checks or live raid testing.
