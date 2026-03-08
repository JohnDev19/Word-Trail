// ─────────────────────────────────────────────
// WORD BANK — 200 words per category, max 12 letters
// ─────────────────────────────────────────────
const CATEGORIES = {
  animals: {
    name: "Animals", icon: "fas fa-paw", unlockAt: 0,
    words: [
      { w: "CAT",       c: "Purring pet"           }, { w: "DOG",       c: "Loyal friend"         },
      { w: "OWL",       c: "Night watcher"         }, { w: "FOX",       c: "Clever canine"        },
      { w: "YAK",       c: "Himalayan ox"          }, { w: "EMU",       c: "Flightless bird"      },
    
    ],
  },

  nature: {
    name: "Nature", icon: "fas fa-mountain", unlockAt: 15,
    words: [
      { w: "OAK",       c: "Strong tree"           }, { w: "DEW",       c: "Morning drops"        },
      { w: "ICE",       c: "Frozen water"          }, { w: "BOG",       c: "Wet ground"           },
      { w: "ELM",       c: "Tall shade tree"       }, { w: "FEN",       c: "Marshy ground"        },
      { w: "ASH",       c: "Grey-barked tree"      }, { w: "SOD",       c: "Grass layer"          },
      { w: "CLAY",      c: "Sticky soil"           }, { w: "DUNE",      c: "Sand hill"            },
      { w: "FERN",      c: "Forest frond"          }, { w: "GLEN",      c: "Narrow valley"        },
  

    ],
  },

  cosmos: {
    name: "Cosmos", icon: "fas fa-star", unlockAt: 30,
    words: [
      { w: "SUN",       c: "Our star"              }, { w: "ION",       c: "Charged atom"         },
      { w: "ORB",       c: "Spherical body"        }, { w: "RAY",       c: "Light beam"           },
      { w: "GAS",       c: "Diffuse matter"        }, { w: "STAR",      c: "Burning ball"         },
  
    ],
  },

  zen: {
    name: "Zen", icon: "fas fa-yin-yang", unlockAt: 45,
    words: [
      { w: "OM",        c: "Sacred sound"          }, { w: "TAO",       c: "The way"              },
      { w: "CHI",       c: "Life energy"           }, { w: "QI",        c: "Vital force"          },
      { w: "ZEN",       c: "Present mind"          }, { w: "AUM",       c: "Cosmic hum"           },
      { w: "WU",        c: "Non-being"             }, { w: "DO",        c: "Path of discipline"   },
 
    ],
  },

  ocean: {
    name: "Ocean", icon: "fas fa-water", unlockAt: 60,
    words: [
      { w: "SEA",       c: "Salty expanse"         }, { w: "BAY",       c: "Calm inlet"           },
      { w: "EEL",       c: "Slithering fish"       }, { w: "RAY",       c: "Flat fish"            },
      { w: "FIN",       c: "Steering blade"        }, { w: "COD",       c: "Atlantic fish"        },
      { w: "KOI",       c: "Ornamental fish"       }, { w: "ROE",       c: "Fish eggs"            },
  
    ],
  },

  seasons: {
    name: "Seasons", icon: "fas fa-sun", unlockAt: 75,
    words: [
      { w: "BUD",       c: "Opening flower"        }, { w: "FOG",       c: "Low cloud"            },
      { w: "ICY",       c: "Frozen surface"        }, { w: "WET",       c: "Rainy days"           },
      { w: "HOT",       c: "Summer heat"           }, { w: "RAW",       c: "Bitter cold"          },
      { w: "DRY",       c: "No rain period"        }, { w: "MUD",       c: "Spring soft ground"   },
      { w: "DEW",       c: "Cool night drops"      }, { w: "BARE",      c: "Winter stripped tree" },
  
    ],
  },

  mystical: {
    name: "Mystical", icon: "fas fa-moon", unlockAt: 88,
    words: [
      { w: "HEX",       c: "Spell cast"            }, { w: "ORB",       c: "Magic sphere"         },
      { w: "RUE",       c: "Magical herb"          }, { w: "RUNE",      c: "Ancient symbol"       },
      { w: "MAGE",      c: "Spell caster"          }, { w: "TOME",      c: "Spell book"           },
      { w: "ELF",       c: "Forest spirit"         }, { w: "FAE",       c: "Fairy folk"           },
      { w: "IMP",       c: "Small devil"           }, { w: "ANKH",      c: "Life symbol"          },

    ],
  },
};