const names = {
  dubstep: [
    "tank",
    "flamethrower",
    "balrog",
    "abominable",
    "bloodlust",
    "machine",
    "madhouse",
    "insanity",
    "roar",
    "lion",
    "shark",
    "fear",
    "terror",
    "rotten",
    "volcanic",
    "monolith",
    "carnal",
    "chaotic",
    "magnum",
    "poison",
    "toxic",
    "sludge",
    "atomic",
    "bulldozer",
    "deep",
    "grave",
    "grim",
    "reaper",
    "dragon",
    "leviathen",
    "golem",
    "minotaur",
    "hydra",
    "banshee",
    "cyclops",
    "mutant",
    "ogre",
    "shade",
    "beast",
    "malice",
    "napalm",
    "riot",
    "savage",
    "tarantula",
    "venom",
    "carnage",
    "war",
    "wraith",
    "balrog",
    "ogre",
    "grim",
    "gorgoroth",
    "hades",
    "behemoth",
    "black",
    "impaled",
    "doom",
    "murder",
    "infernal",
    "funeral",
    "mayhem",
    "hammer",
    "mutilate",
    "torment",
    "pantheon"
  ],
  house: [
    "Baby",
    "Sugar",
    "Bitter",
    "Lemon-flavored",
    "Spicy",
    "Bland",
    "Minty",
    "Sweet",
    "Delicious",
    "Pickled",
    "Tangy",
    "Fruity",
    "Salty",
    "Tasty",
    "Gingery",
    "Sour",
    "Yummy",
    "To Describe Touch",
    "Boiling",
    "Fluffy",
    "Sharp",
    "Breezy",
    "Freezing",
    "Silky",
    "Bumpy",
    "Fuzzy",
    "Slick",
    "Chilly",
    "Greasy",
    "Slimy",
    "Cold",
    "Hard",
    "Slippery",
    "Cool",
    "Hot",
    "Smooth",
    "Cuddly",
    "Icy",
    "Soft",
    "Damp",
    "Loose",
    "Solid",
    "Dirty",
    "Melted",
    "Sticky",
    "Dry",
    "Painful",
    "Tender",
    "Dusty",
    "Prickly",
    "Tight",
    "Encrusted",
    "Rough",
    "Uneven",
    "Filthy",
    "Shaggy",
    "Warm",
    "Flaky",
    "Shaky",
    "Wet",
    "Blaring",
    "Melodic",
    "Screeching",
    "Deafening",
    "Moaning",
    "Shrill",
    "Faint",
    "Muffled",
    "Silent",
    "Hoarse",
    "Mute",
    "Soft",
    "High-pitched",
    "Noisy",
    "Squealing",
    "Hissing",
    "Purring",
    "Squeaking",
    "Hushed",
    "Quiet",
    "Thundering",
    "Husky",
    "Raspy",
    "Voiceless",
    "Loud",
    "Resonant",
    "Whispering",
    "Azure",
    "Gray",
    "Pinkish",
    "Black",
    "Green",
    "Purple",
    "Blue",
    "Indigo",
    "Red",
    "Bright",
    "Lavender",
    "Rosy",
    "Brown",
    "Light",
    "Scarlet",
    "Crimson",
    "Magenta",
    "Silver",
    "Dark",
    "Turquoise",
    "Drab",
    "Mustard",
    "Violet",
    "Dull",
    "Orange",
    "White",
    "Gold",
    "Pink",
    "Yellow"
  ],
  alternative: [
    "Aback",
    "Abaft",
    "Abashed",
    "Aberrant",
    "Abhorrent",
    "Abiding",
    "Abject",
    "Abortive",
    "Abounding",
    "Abrasive",
    "Abstracted",
    "Acrid",
    "Adamant",
    "Adhoc",
    "Adjoining",
    "Adroit",
    "Aloof",
    "Amatory",
    "Animistic",
    "Antic",
    "Arcadian",
    "Auspicious",
    "Axiomatic",
    "Baleful",
    "Barbarous",
    "Bellicose",
    "Bilious",
    "Boorish",
    "Brash",
    "Cagey",
    "Calamitous",
    "Capricious",
    "Caustic",
    "Cerulean",
    "Cloistered",
    "Comely",
    "Concomitant",
    "Contumacious",
    "Corpulent",
    "Crapulous",
    "Craven",
    "Dapper",
    "Debonair",
    "Decorous",
    "Defamatory",
    "Didactic",
    "Dilatory",
    "Direful",
    "Divergent",
    "Dowdy",
    "Draconian",
    "Efficacious",
    "Effulgent",
    "Egregious",
    "Elated",
    "Endemic",
    "Erratic",
    "Ethereal",
    "Execrable",
    "Exultant",
    "Fallacious",
    "Fastidious",
    "Feckless",
    "Fecund",
    "Friable",
    "Fulsome",
    "Furtive",
    "Garrulous",
    "Guileless",
    "Gustatory",
    "Heady",
    "Heuristic",
    "Histrionic",
    "Hubristic",
    "Incandescent",
    "Incendiary",
    "Innate",
    "Insidious",
    "Insolent",
    "Intransigent",
    "Inveterate",
    "Invidious",
    "Irate",
    "Irksome",
    "Jejune",
    "Jocular",
    "Judicious",
    "Lachrymose",
    "Languid",
    "Limpid",
    "Loquacious",
    "Macabre",
    "Mannered",
    "Mendacious",
    "Meretricious",
    "Minatory",
    "Mordant",
    "Munificent",
    "Nebulous",
    "Nefarious",
    "Nondescript",
    "Noxious",
    "Obsequious",
    "Obtuse",
    "Onerous",
    "Ossified",
    "Overwrought",
    "Parsimonious",
    "Pendulous",
    "Penitent",
    "Pernicious",
    "Pervasive",
    "Petulant",
    "Picayune",
    "Piquant",
    "Placid",
    "Platitudinous",
    "Plucky",
    "Precipitate",
    "Propitious",
    "Puckish"
  ],
  tropical: [
    "tropic",
    "warm",
    "margarita",
    "equatorial",
    "hot",
    "subtropical",
    "exotic",
    "mangrove",
    "typhoon",
    "dengue",
    "rain",
    "tropical",
    "temperate",
    "rainforest",
    "coral",
    "extratropical",
    "orchid",
    "lush",
    "sunny",
    "ultratropical",
    "lady",
    "grass",
    "monsoonal",
    "capricorn",
    "tropicalize",
    "hibiscus",
    "oceanic",
    "humid",
    "jungle",
    "salty",
    "daquiri",
    "aloha",
    "mahalo",
    "palm trees",
    "coconut",
    "mango",
    "peach",
    "lobster",
    "pina colada"
  ],
  trap: [
    "Benji",
    "Yard",
    "Pots",
    "Brass",
    "Scrilla",
    "Scrappa",
    "Dibs",
    "Handbag",
    "Measures",
    "Bags",
    "Handful",
    "Mill",
    "Sheckles",
    "Ton",
    "Stack",
    "Brick",
    "Dough",
    "Bread",
    "Cash",
    "C-Note",
    "Feddie",
    "Course Note",
    "Rollin",
    "Yayo",
    "Racks",
    "kilo",
    "mula",
    "Fuck",
    "Blue Cheese",
    "grind",
    "Hats",
    "Dime",
    "Deuce",
    "Chicken head",
    "Skeet",
    "69",
    "Head",
    "Bitch",
    "Dusty",
    "Thot",
    "304",
    "Buster",
    "Tweeker",
    "Tommy",
    "817",
    "skrrt",
    "flex",
    "fanta",
    "chopper",
    "stunting",
    "flexing",
    "mane",
    "trill",
    "trapping",
    "homie",
    "balling",
    "realest",
    "hoe",
    "snitch",
    "goon",
    "bitch",
    "clique",
    "blunts",
    "pussy",
    "rapper",
    "motherfucking",
    "swag",
    "gat",
    "rep",
    "shooter",
    "westside",
    "homeboy",
    "stacking",
    "nina",
    "beef",
    "gangsta",
    "bro",
    "dope",
    "stripper",
    "clip",
    "hood",
    "coupe",
    "dick",
    "biggie",
    "shit",
    "nike",
    "pimpin",
    "tech",
    "deuce",
    "hustle",
    "benz",
    "def",
    "fuck",
    "mac",
    "yup",
    "project",
    "stash"
  ]
};

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function firstUpper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$("#generator").submit(function(e) {
  e.preventDefault();
  let list;
  let name;
  const data = $(this).serializeArray();
  const type = data[0].value;
  const genre = data[1].value;

  switch (genre) {
    case "Dubstep":
      list = names.dubstep;
      break;
    case "House":
      list = names.house;
      break;
    case "Alternative":
      list = names.alternative;
      break;
    case "Tropical":
      list = names.tropical;
      break;
    case "Trap":
      list = names.trap;
      break;
  }
  name = list[randomNumber(0, list.length)];
  name = firstUpper(name);
  $("#output").text(`${name} ${type}`);
});
