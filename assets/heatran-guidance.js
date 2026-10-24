/* English localization of the French Raid Atlas Heatran turn guidance. */
const raidPreflight={
  "core": {
    "source": "Crimson Core",
    "position": "Magmortar to the right of Heatran",
    "warning": "If Magmortar is not on the right: reset.",
    "detail": "Crimson Core does not explicitly require Torkoal to be on the left."
  },
  "video": {
    "source": "Beorns / JinxedBoon · video",
    "position": "Placement shown: Torkoal on the left · Heatran in the center · Magmortar on the right",
    "warning": "The PDF says “RESET FOR MAGMORTAR”: begin with Magmortar present.",
    "detail": "The PDF does not specify a mandatory side for Magmortar. Torkoal-left/Magmortar-right is shown in the video, not stated as a reset condition."
  }
};
const turnGuidance={
  "core": [
    {
      "title": "Opening and stealing Leftovers",
      "points": [
        "P1 and P2 Excadrill: Earthquake; P4 Excadrill: Drill Run. Torkoal's Air Balloon protects it from Earthquake.",
        "P3 Weavile, holding no item: use Thief at the start to steal Heatran's Leftovers.",
        "The four lead Pokémon are expected to faint so that the next wave can enter."
      ],
      "alert": "Priority: steal Leftovers immediately with Weavile."
    },
    {
      "title": "Use Bulldoze to slow Heatran",
      "points": [
        "P1, P3 and P4: Nidoking uses Earth Power. P2: Gliscor uses Bulldoze to lower Heatran's Speed.",
        "The Speed drop helps both Octillery act on the following turn. Low Special Defense on Gliscor may help it faint at the intended moment.",
        "The next Pokémon enter after KOs or when Roar forces a switch. In Crimson Core, not every second-wave Pokémon must faint on this turn."
      ],
      "alert": "Use Bulldoze before the Octillery enter."
    },
    {
      "title": "Double Defog and two Octillery",
      "points": [
        "P1 and P2: Octillery uses Hydro Pump. Suction Cups prevents Roar from forcing them out.",
        "P3: Xatu uses Defog; P4: Pelipper uses Defog. Both uses clear the hazards described by the source.",
        "Xatu's Magic Bounce can reflect Roar if Xatu is targeted. Pelipper's Drizzle brings rain."
      ],
      "alert": "Crimson Core uses P3 Xatu + P4 Pelipper, not two Xatu."
    },
    {
      "title": "Light Screen, Water Sport and rain",
      "points": [
        "P1: Starmie sets Light Screen; Light Clay extends it to eight turns.",
        "P2: Pelipper activates Drizzle on entry, then uses Water Sport to reduce Fire-type damage.",
        "P3 and P4: Flygon uses Earth Power. KOs and Roar may alter the order in which Pokémon enter."
      ],
      "alert": "Do not confuse P4 Pelipper (Defog on turn 3) with P2 Pelipper (Water Sport here)."
    },
    {
      "title": "Offense in the rain",
      "points": [
        "P1: Kingdra uses Rain Dance if rain has ended; otherwise Hydro Pump.",
        "P2, P3 and P4: Politoed uses rain-boosted Weather Ball with a Water Gem.",
        "Politoed's Drizzle can restore rain. Watch the 50% threshold for Brine and 40% for Adaptation."
      ],
      "alert": "Check the weather: Weather Ball changes type based on current conditions."
    },
    {
      "title": "Fake Tears and Brine",
      "points": [
        "P1: Jolteon uses Fake Tears to lower Heatran's Special Defense by two stages.",
        "P2, P3 and P4: Kingdra uses Brine, which doubles in power when Heatran is at 50% HP or lower.",
        "The Beorns PDF describes a shield at around 25% HP; if possible, use Fake Tears before this threshold. Crimson Core's finisher remains Fake Tears followed by Brine."
      ],
      "alert": "Aim for -2 Special Defense before the shield, if possible."
    }
  ],
  "video": [
    {
      "title": "Opening: damage and Thief",
      "points": [
        "The video shows Torkoal left, Heatran center and Magmortar right. The PDF says “RESET FOR MAGMORTAR” without requiring that exact arrangement. Torkoal's Air Balloon keeps it safe from Earthquake.",
        "P1/P2: Excadrill uses Earthquake; P3: itemless Weavile uses Thief to steal Leftovers; P4: Excadrill uses Drill Run.",
        "According to the Beorns table, all four leads should faint to bring in the second wave. The Close Combat alternatives have not been tested."
      ],
      "alert": "Priority: use Thief on turn 1 to remove Leftovers."
    },
    {
      "title": "Pelipper, Gliscor and two Nidoking",
      "points": [
        "P1 (left): Pelipper holds a Water Gem and uses Weather Ball; Drizzle brings rain.",
        "P2 (middle left): Gliscor uses Bulldoze to lower Heatran's Speed.",
        "P3 and P4 (right): Nidoking uses Life Orb + Earth Power. Ideally, this second wave should faint."
      ],
      "alert": "Video reference: Pelipper and Gliscor on the left; two Nidoking on the right."
    },
    {
      "title": "Two Octillery and two Xatu",
      "points": [
        "P1/P2: Octillery uses Hydro Pump. Suction Cups prevents Roar from forcing it out.",
        "P3/P4: both Xatu use Defog; Magic Bounce may reflect Roar if Xatu is targeted.",
        "In the selected video strategy, P3 and P4 Xatu perform the two Defogs. The PDF's updated Pelipper-P4 variant is not being used here."
      ],
      "alert": "Both Xatu need Defog; watch for Roar and forced switches."
    },
    {
      "title": "Protection and Flygon damage",
      "points": [
        "P1: Starmie sets Light Screen. If it survives, it can use Hydro Pump later.",
        "P2: Pelipper triggers Drizzle and then uses Water Sport.",
        "P3/P4: Flygon uses Earth Power. Life Orb and Hidden Power Water are experimental alternatives in the guide.",
        "If a Xatu survived the prior turn, it may set Light Screen instead of Starmie."
      ],
      "alert": "P2 uses Water Sport, not Defog."
    },
    {
      "title": "Conditional follow-up",
      "points": [
        "P1: Kingdra enters after Starmie faints and attacks with its Water-type moves.",
        "P2: Politoed uses Drizzle to restore rain when it is no longer active.",
        "P3/P4: keep using Earth Power with Flygon while it remains on the field. After it faints, choose Politoed if rain is gone, or Kingdra if rain is active.",
        "From this phase onward, moves and replacement Pokémon depend on KOs, weather and Roar. This is not a guaranteed fixed turn."
      ],
      "alert": "Do not force a replacement while the preceding Pokémon is still on the field."
    },
    {
      "title": "Turn 6 onward: finish according to the situation",
      "points": [
        "P1: Jolteon enters after Kingdra faints and uses Fake Tears, ideally around 30% HP before the shield.",
        "P2: once Politoed is down, Kingdra uses Brine when Heatran is at 50% HP or less.",
        "P3/P4: use Politoed if rain is missing, or Kingdra if rain is already up.",
        "Adaptation occurs around 40%, and a four-charge shield around 25%. Aim for -2 Special Defense."
      ],
      "alert": "Turn 6 is a guideline, not a fixed sequence. Do not bring in Jolteon too soon; preserve the Fake Tears timing (ideally around 30% and before the shield)."
    }
  ]
};
