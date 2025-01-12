export const professions = [
  {
    name: "Anthropologist or Historian",
    description:
      "You study humanity. You’re concerned with the patterns that emerge over time, across land masses, cultures, and language groups. You might be a number-cruncher, a field worker trudging through the jungle, a consultant in a war zone, or a think-tank analyst sifting myth from history in studies of the Tcho-Tcho peoples.",
    recommendedStats: ["INT"],
    professionalSkills: [
      { id: "special", name: "Anthropology or Archeology", value: 50 },
      { id: "bureaucracy", name: "Bureaucracy", value: 40 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 40,
      },
      { id: "history", name: "History", value: 40 },
      { id: "occult", name: "Occult", value: 40 },
      { id: "persuade", name: "Persuade", value: 40 },
    ],
    optionalSkills: [
      { id: "anthropology", name: "Anthropology", value: 40 },
      { id: "archeology", name: "Archeology", value: 40 },
      { id: "humint", name: "HUMINT", value: 50 },
      { id: "navigate", name: "Navigate", value: 50 },
      { id: "ride", name: "Ride", value: 50 },
      { id: "search", name: "Search", value: 60 },
      { id: "survival", name: "Survival", value: 50 },
    ],
    numberOfOptionalSkills: 2,
    bonds: 4,
  },
  {
    name: "Computer Scientist or Engineer",
    description:
      "Computers and machinery are the backbone of modern industry. You are a craftsman with data or machinery, possibly for the government and most definitely for profit. However you use your skills, the overlap between information technology and awareness of the unnatural could make this the most dangerous job on the planet.",
    recommendedStats: ["INT"],
    professionalSkills: [
      { id: "computerScience", name: "Computer Science", value: 60 },
      { id: "craft", name: "Craft", type: "Electrician", value: 30 },
      { id: "craft", name: "Craft", type: "Mechanic", value: 30 },
      { id: "craft", name: "Craft", type: "Microelectronics", value: 40 },
      { id: "science", name: "Science", type: "Mathematics", value: 40 },
      { id: "sigint", name: "SIGINT", value: 40 },
    ],
    optionalSkills: [
      { id: "accounting", name: "Accounting", value: 50 },
      { id: "bureaucracy", name: "Bureaucracy", value: 50 },
      { id: "craft", name: "Craft", type: "", value: 40 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 40,
      },
      { id: "heavyMachinery", name: "Heavy Machinery", value: 50 },
      { id: "law", name: "Law", value: 40 },
      { id: "science", name: "Science", type: "", value: 40 },
    ],
    numberOfOptionalSkills: 4,
    bonds: 3,
  },
  {
    name: "Federal Agent",
    description:
      "Many Delta Green Agents are federal law enforcement officers, mostly from the FBI. Delta Green decided long ago that federal agents have the optimum balance of skills and mental stability needed to confront the unnatural.",
    recommendedStats: ["CON", "POW", "CHA"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 50 },
      { id: "bureaucracy", name: "Bureaucracy", value: 40 },
      { id: "criminology", name: "Criminology", value: 50 },
      { id: "drive", name: "Drive", value: 50 },
      { id: "firearms", name: "Firearms", value: 50 },
      { id: "forensics", name: "Forensics", value: 30 },
      { id: "humint", name: "HUMINT", value: 60 },
      { id: "law", name: "Law", value: 30 },
      { id: "persuade", name: "Persuade", value: 50 },
      { id: "search", name: "Search", value: 50 },
      { id: "unarmedCombat", name: "Unarmed Combat", value: 60 },
    ],
    optionalSkills: [
      { id: "accounting", name: "Accounting", value: 60 },
      { id: "computerScience", name: "Computer Science", value: 50 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      { id: "heavyWeapons", name: "Heavy Weapons", value: 50 },
      { id: "pharmacy", name: "Pharmacy", value: 50 },
    ],
    numberOfOptionalSkills: 1,
    bonds: 3,
  },
  {
    name: "Physician",
    description:
      "Doctors are often the first to uncover signs of an unnatural incursion, and the most valuable investigators of its disastrous effects on humanity.",
    recommendedStats: ["INT", "POW", "DEX"],
    professionalSkills: [
      { id: "bureaucracy", name: "Bureaucracy", value: 40 },
      { id: "firstAid", name: "First Aid", value: 60 },
      { id: "medicine", name: "Medicine", value: 60 },
      { id: "persuade", name: "Persuade", value: 40 },
      { id: "pharmacy", name: "Pharmacy", value: 50 },
      { id: "science", name: "Science", type: "Biology", value: 60 },
      { id: "search", name: "Search", value: 40 },
    ],
    optionalSkills: [
      { id: "forensics", name: "Forensics", value: 50 },
      { id: "psychotherapy", name: "Psychotherapy", value: 60 },
      { id: "science", name: "Science", type: "", value: 50 },
      { id: "surgery", name: "Surgery", value: 50 },
    ],
    numberOfOptionalSkills: 2,
    bonds: 3,
  },
  {
    name: "Scientist",
    description:
      "You expand human knowledge in a field such as biology, physics, or chemistry. When certain forms of knowledge cause insanity and death, it’s easy to conclude that some hypotheses should not be tested.",
    recommendedStats: ["INT"],
    professionalSkills: [
      { id: "bureaucracy", name: "Bureaucracy", value: 40 },
      { id: "computerScience", name: "Computer Science", value: 40 },
      { id: "science", name: "Science", type: "", value: 60 },
      { id: "science", name: "Science", type: "", value: 50 },
      { id: "science", name: "Science", type: "", value: 50 },
    ],
    optionalSkills: [
      { id: "accounting", name: "Accounting", value: 50 },
      { id: "craft", name: "Craft", type: "", value: 40 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 40,
      },
      { id: "forensics", name: "Forensics", value: 40 },
      { id: "law", name: "Law", value: 40 },
      { id: "pharmacy", name: "Pharmacy", value: 40 },
    ],
    numberOfOptionalSkills: 3,
    bonds: 4,
  },
  {
    name: "Special Operator",
    description:
      "As part of a force like the U.S. Army Rangers, you volunteered for a more difficult path than other soldiers. You’ve spent years in the most grueling training on the planet, and now serve on the most dangerous missions around.",
    recommendedStats: ["STR", "CON", "POW"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 60 },
      { id: "athletics", name: "Athletics", value: 60 },
      { id: "demolitions", name: "Demolitions", value: 40 },
      { id: "firearms", name: "Firearms", value: 60 },
      { id: "heavyWeapons", name: "Heavy Weapons", value: 50 },
      { id: "meleeWeapons", name: "Melee Weapons", value: 50 },
      {
        id: "militaryScience",
        name: "Military Science",
        type: "Land",
        value: 60,
      },
      { id: "navigate", name: "Navigate", value: 50 },
      { id: "stealth", name: "Stealth", value: 50 },
      { id: "survival", name: "Survival", value: 50 },
      { id: "swim", name: "Swim", value: 50 },
      { id: "unarmedCombat", name: "Unarmed Combat", value: 60 },
    ],
    optionalSkills: [],
    numberOfOptionalSkills: 0,
    bonds: 2,
  },
];

export const additionalProfessions = [
  {
    name: "Criminal",
    description:
      'So much is illegal that there are broad economies of crime. This profile fits a hardened militant or a traditional "black collar" criminal: pimp, burglar, extortionist, or thug. If you want a white-collar criminal, choose Computer Scientist or Business Executive and make very risky decisions.',
    recommendedStats: ["STR", "DEX"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 50 },
      { id: "athletics", name: "Athletics", value: 50 },
      { id: "criminology", name: "Criminology", value: 60 },
      { id: "dodge", name: "Dodge", value: 40 },
      { id: "drive", name: "Drive", value: 50 },
      { id: "firearms", name: "Firearms", value: 40 },
      { id: "law", name: "Law", value: 20 },
      { id: "meleeWeapons", name: "Melee Weapons", value: 40 },
      { id: "persuade", name: "Persuade", value: 50 },
      { id: "stealth", name: "Stealth", value: 50 },
      { id: "unarmedCombat", name: "Unarmed Combat", value: 50 },
    ],
    optionalSkills: [
      { id: "craft", name: "Craft", type: "Locksmithing", value: 40 },
      { id: "demolitions", name: "Demolitions", value: 40 },
      { id: "disguise", name: "Disguise", value: 50 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 40,
      },
      { id: "forensics", name: "Forensics", value: 40 },
      { id: "humint", name: "HUMINT", value: 50 },
      { id: "navigate", name: "Navigate", value: 50 },
      { id: "occult", name: "Occult", value: 50 },
      { id: "pharmacy", name: "Pharmacy", value: 50 },
    ],
    numberOfOptionalSkills: 2,
    bonds: 4,
  },
  {
    name: "Firefighter",
    description:
      "Your job oscillates between the tedium of maintaining your gear, exhilaration when the alarm finally comes, and the work of investigating a scene after the smoke has cleared. If you’re involved with Delta Green, you clearly stumbled into something worse than a house fire.",
    recommendedStats: ["STR", "DEX", "CON"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 50 },
      { id: "athletics", name: "Athletics", value: 60 },
      { id: "craft", name: "Craft", type: "Electrician", value: 40 },
      { id: "craft", name: "Craft", type: "Mechanic", value: 40 },
      { id: "demolitions", name: "Demolitions", value: 50 },
      { id: "drive", name: "Drive", value: 50 },
      { id: "firstAid", name: "First Aid", value: 50 },
      { id: "forensics", name: "Forensics", value: 40 },
      { id: "heavyMachinery", name: "Heavy Machinery", value: 50 },
      { id: "navigate", name: "Navigate", value: 50 },
      { id: "search", name: "Search", value: 40 },
    ],
    optionalSkills: [],
    numberOfOptionalSkills: 0,
    bonds: 3,
  },
  {
    name: "Foreign Service Officer",
    description:
      "You travel to strange lands, meet interesting people, and try to get along with them. Odds are you work for the State Department, though USAID, the Commercial Service and the Foreign Agriculture Service also have FSOs. Either way, you’ve had every opportunity to learn exotic and deadly things; the kinds of things that qualify you for Delta Green clearance.",
    recommendedStats: ["INT", "CHA"],
    professionalSkills: [
      { id: "accounting", name: "Accounting", value: 40 },
      { id: "anthropology", name: "Anthropology", value: 40 },
      { id: "bureaucracy", name: "Bureaucracy", value: 60 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 40,
      },
      { id: "history", name: "History", value: 40 },
      { id: "humint", name: "HUMINT", value: 50 },
      { id: "law", name: "Law", value: 40 },
      { id: "persuade", name: "Persuade", value: 50 },
    ],
    optionalSkills: [],
    numberOfOptionalSkills: 0,
    bonds: 3,
  },
  {
    name: "Intelligence Analyst",
    description: "",
    recommendedStats: ["INT"],
    professionalSkills: [
      { id: "anthropology", name: "Anthropology", value: 40 },
      { id: "bureaucracy", name: "Bureaucracy", value: 50 },
      { id: "computerScience", name: "Computer Science", value: 40 },
      { id: "criminology", name: "Criminology", value: 40 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 40,
      },
      { id: "history", name: "History", value: 40 },
      { id: "humint", name: "HUMINT", value: 50 },
      { id: "sigint", name: "SIGINT", value: 40 },
    ],
    optionalSkills: [],
    numberOfOptionalSkills: 0,
    bonds: 3,
  },
  {
    name: "Intelligence Case Officer",
    description:
      "You recruit people to spy on their own countries for your agency, probably the CIA. Your job is to develop foreign intelligence sources (“assets”), communicate with them, and keep them under control, productive, and alive. It’s a hard business because you must view everyone as a potential threat, liar, or tool to further your agenda. If your name came to the attention of Delta Green, congratulations; you are now someone else’s asset.",
    recommendedStats: ["INT", "POW", "CHA"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 50 },
      { id: "bureaucracy", name: "Bureaucracy", value: 40 },
      { id: "criminology", name: "Criminology", value: 50 },
      { id: "disguise", name: "Disguise", value: 50 },
      { id: "drive", name: "Drive", value: 40 },
      { id: "firearms", name: "Firearms", value: 40 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 40,
      },
      { id: "humint", name: "HUMINT", value: 60 },
      { id: "persuade", name: "Persuade", value: 60 },
      { id: "sigint", name: "SIGINT", value: 40 },
      { id: "stealth", name: "Stealth", value: 50 },
      { id: "unarmedCombat", name: "Unarmed Combat", value: 50 },
    ],
    optionalSkills: [],
    numberOfOptionalSkills: 0,
    bonds: 2,
  },
  {
    name: "Lawyer or Business Executive",
    description:
      "Your tools are a computer and smartphone. You might be moving millions of dollars, or bits of data, or both. Or you might",
    recommendedStats: ["INT", "CHA"],
    professionalSkills: [
      { id: "accounting", name: "Accounting", value: 50 },
      { id: "bureaucracy", name: "Bureaucracy", value: 50 },
      { id: "humint", name: "HUMINT", value: 40 },
      { id: "persuade", name: "Persuade", value: 60 },
    ],
    optionalSkills: [
      { id: "computerScience", name: "Computer Science", value: 50 },
      { id: "criminology", name: "Criminology", value: 60 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      { id: "law", name: "Law", value: 50 },
      { id: "pharmacy", name: "Pharmacy", value: 50 },
    ],
    numberOfOptionalSkills: 4,
    bonds: 4,
  },
  // {
  //   name: "Media Specialist",
  //   description:
  //     "You might be an author, an editor, a researcher for a company or any branch of the government, a blogger, a TV reporter, or a scholar of rare texts. With the unnatural, you’ve uncovered the story of a lifetime.",
  //   recommendedStats: ["INT", "CHA"],
  //   professionalSkills: [{ id: "", name: "", value: 0 }],
  //   optionalSkills: [{ id: "", name: "", value: 0 }],
  //   numberOfOptionalSkills: 5,
  //   bonds: 4,
  // },
  {
    name: "Nurse or Paramedic",
    description:
      "Medical professionals are on the front line when awful things happen. Is that what brought you to the group’s attention?",
    recommendedStats: ["INT", "POW", "CHA"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 40 },
      { id: "bureaucracy", name: "Bureaucracy", value: 40 },
      { id: "firstAid", name: "First Aid", value: 60 },
      { id: "humint", name: "HUMINT", value: 40 },
      { id: "medicine", name: "Medicine", value: 40 },
      { id: "persuade", name: "Persuade", value: 40 },
      { id: "pharmacy", name: "Pharmacy", value: 40 },
      { id: "science", name: "Science", type: "Biology", value: 40 },
    ],
    optionalSkills: [
      { id: "drive", name: "Drive", value: 60 },
      { id: "forensics", name: "Forensics", value: 40 },
      { id: "navigate", name: "Navigate", value: 50 },
      { id: "psychotherapy", name: "Psychotherapy", value: 50 },
      { id: "search", name: "Search", value: 60 },
    ],
    numberOfOptionalSkills: 2,
    bonds: 4,
  },
  {
    name: "Pilot or Sailor",
    description:
      "Air or sea, commercial or military, your duty is to keep your passengers alive and craft intact. This can lead to hard choices when your passengers put the vehicle in danger. Or are you a drone operator, flying a Predator from a thousand miles away? Either way, what op brought you to the attention of Delta Green?",
    recommendedStats: ["DEX", "INT"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 60 },
      { id: "bureaucracy", name: "Bureaucracy", value: 30 },
      {
        id: "craft",
        name: "Craft",
        type: "Electrician",
        value: 40,
      },
      {
        id: "craft",
        name: "Craft",
        type: "Mechanic",
        value: 40,
      },
      { id: "navigate", name: "Navigate", value: 50 },
      {
        id: "pilot",
        name: "Pilot",
        type: "",
        value: 60,
      },
      {
        id: "science",
        name: "Science",
        type: "Meteorology",
        value: 40,
      },
      { id: "swim", name: "Swim", value: 40 },
    ],
    optionalSkills: [
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      {
        id: "pilot",
        name: "Pilot",
        type: "",
        value: 50,
      },
      { id: "heavyWeapons", name: "Heavy Weapons", value: 50 },
      {
        id: "militaryScience",
        name: "Military Science",
        type: "",
        value: 50,
      },
    ],
    numberOfOptionalSkills: 2,
    bonds: 3,
  },
  {
    name: "Police Officer",
    description:
      "You serve and protect. Police officers walk the beat in uniform. Deputy sheriffs answer to an elected law enforcer and have jurisdiction over an entire county. Detectives come in after the fact and put the pieces together.",
    recommendedStats: ["STR", "CON", "POW"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 60 },
      { id: "bureaucracy", name: "Bureaucracy", value: 40 },
      { id: "criminology", name: "Criminology", value: 40 },
      { id: "drive", name: "Drive", value: 50 },
      { id: "firearms", name: "Firearms", value: 40 },
      { id: "firstAid", name: "First Aid", value: 30 },
      { id: "humint", name: "HUMINT", value: 50 },
      { id: "law", name: "Law", value: 30 },
      { id: "meleeWeapons", name: "Melee Weapons", value: 50 },
      { id: "navigate", name: "Navigate", value: 40 },
      { id: "persuade", name: "Persuade", value: 40 },
      { id: "search", name: "Search", value: 40 },
      { id: "unarmedCombat", name: "Unarmed Combat", value: 60 },
    ],
    optionalSkills: [
      { id: "forensics", name: "Forensics", value: 50 },
      { id: "heavyMachinery", name: "Heavy Machinery", value: 60 },
      { id: "heavyWeapons", name: "Heavy Weapons", value: 50 },
      { id: "ride", name: "Ride", value: 60 },
    ],
    numberOfOptionalSkills: 1,
    bonds: 3,
  },
  {
    name: "Program Manager",
    description:
      "You run an organization. Someone has to secure funding, move resources, and make connections, and that’s you. You control a budget and are responsible for how your program is maintained and where the money goes. Organizations discover the most startling things in their pursuit of profit or the public good.",
    recommendedStats: ["INT", "CHA"],
    professionalSkills: [
      { id: "accounting", name: "Accounting", value: 60 },
      { id: "bureaucracy", name: "Bureaucracy", value: 60 },
      { id: "computerScience", name: "Computer Science", value: 50 },
      { id: "criminology", name: "Criminology", value: 30 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 50,
      },
      { id: "history", name: "History", value: 40 },
      { id: "law", name: "Law", value: 40 },
      { id: "persuade", name: "Persuade", value: 50 },
    ],
    optionalSkills: [
      { id: "anthropology", name: "Anthropology", value: 30 },
      { id: "art", name: "Art", type: "", value: 30 },
      { id: "craft", name: "Craft", type: "", value: 30 },
      { id: "science", name: "Science", type: "", value: 30 },
    ],
    numberOfOptionalSkills: 1,
    bonds: 4,
  },
  {
    name: "Soldier or Marine",
    description:
      "Governments will always need boots on the ground and steady hands holding rifles. When war begins, civilization gets out of the way. With the social contract void, unnatural things creep in at the edges. There’s a reason Delta Green began in the military.",
    recommendedStats: ["STR", "CON"],
    professionalSkills: [
      { id: "alertness", name: "Alertness", value: 50 },
      { id: "athletics", name: "Athletics", value: 50 },
      { id: "bureaucracy", name: "Bureaucracy", value: 30 },
      { id: "Drive", name: "Drive", value: 40 },
      { id: "firearms", name: "Firearms", value: 40 },
      { id: "firstAid", name: "First Aid", value: 40 },
      {
        id: "militaryScience",
        name: "Military Science",
        type: "Land",
        value: 40,
      },
      { id: "navigate", name: "Navigate", value: 40 },
      { id: "persuade", name: "Persuade", value: 30 },
      { id: "unarmedCombat", name: "Unarmed Combat", value: 50 },
    ],
    optionalSkills: [
      { id: "artillery", name: "Artillery", value: 40 },
      { id: "computerScience", name: "Computer Science", value: 40 },
      { id: "craft", name: "Craft", type: "", value: 40 },
      { id: "demolitions", name: "Demolitions", value: 40 },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
        value: 40,
      },
      { id: "heavyMachinery", name: "Heavy Machinery", value: 50 },
      { id: "heavyWeapons", name: "Heavy Weapons", value: 40 },
      { id: "search", name: "Search", value: 60 },
      { id: "sigint", name: "SIGINT", value: 40 },
      { id: "swim", name: "Swim", value: 60 },
    ],
    numberOfOptionalSkills: 3,
    bonds: 4,
  },
];

export const skillPackages = [
  {
    name: "Artist, Actor, or Musician",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "craft", name: "Craft", type: "" },
      { id: "disguise", name: "Disguise" },
      { id: "persuade", name: "Persuade" },
      { id: "art", name: "Art", type: "" },
      { id: "art", name: "Art", type: "" },
      { id: "art", name: "Art", type: "" },
      { id: "humint", name: "HUMINT" },
    ],
  },
  {
    name: "Athlete",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "athletics", name: "Athletics" },
      { id: "dodge", name: "Dodge" },
      { id: "firstAid", name: "First Aid" },
      { id: "humint", name: "HUMINT" },
      { id: "persuade", name: "Persuade" },
      { id: "swim", name: "Swim" },
      { id: "unarmedCombat", name: "Unarmed Combat" },
    ],
  },
  {
    name: "Author, Editor, or Journalist",
    professionalSkills: [
      { id: "anthropology", name: "Anthropology" },
      { id: "art", name: "Art", type: "" },
      { id: "bureaucracy", name: "Bureaucracy" },
      { id: "history", name: "History" },
      { id: "law", name: "Law" },
      { id: "occult", name: "Occult" },
      { id: "persuade", name: "Persuade" },
      { id: "humint", name: "HUMINT" },
    ],
  },
  {
    name: '"Black Bag" Training',
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "athletics", name: "Athletics" },
      { id: "craft", name: "Craft", type: "Electrician" },
      { id: "craft", name: "Craft", type: "Locksmithing" },
      { id: "criminology", name: "Criminology" },
      { id: "disguise", name: "Disguise" },
      { id: "search", name: "Search" },
      { id: "stealth", name: "Stealth" },
    ],
  },
  {
    name: "Blue-Collar Worker",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "craft", name: "Craft", type: "" },
      { id: "craft", name: "Craft", type: "" },
      { id: "drive", name: "Drive" },
      { id: "firstAid", name: "First Aid" },
      { id: "heavyMachinery", name: "Heavy Machinery" },
      { id: "navigate", name: "Navigate" },
      { id: "search", name: "Search" },
    ],
  },
  {
    name: "Bureaucrat",
    professionalSkills: [
      { id: "accounting", name: "Accounting" },
      { id: "bureaucracy", name: "Bureaucracy" },
      { id: "computerScience", name: "Computer Science" },
      { id: "criminology", name: "Criminology" },
      { id: "humint", name: "HUMINT" },
      { id: "law", name: "Law" },
      { id: "persuade", name: "Persuade" },
    ],
    personalSpecialty: 1,
  },
  {
    name: "Clergy",
    professionalSkills: [
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      { id: "history", name: "History" },
      { id: "humint", name: "HUMINT" },
      { id: "occult", name: "Occult" },
      { id: "persuade", name: "Persuade" },
      { id: "psychotherapy", name: "Psychotherapy" },
    ],
  },
  {
    name: "Combat Veteran",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "dodge", name: "Dodge" },
      { id: "firearms", name: "Firearms" },
      { id: "firstAid", name: "First Aid" },
      { id: "heavyWeapons", name: "Heavy Weapons" },
      { id: "meleeWeapons", name: "Melee Weapons" },
      { id: "stealth", name: "Stealth" },
      { id: "unarmedCombat", name: "Unarmed Combat" },
    ],
  },
  {
    name: "Computer Enthusiast or Hacker",
    professionalSkills: [
      { id: "computerScience", name: "Computer Science" },
      {
        id: "craft",
        name: "Craft (Microelectronics)",
        type: "Microelectronics",
      },
      { id: "science", name: "Science (Mathematics)", type: "Mathematics" },
      { id: "sigint", name: "SIGINT" },
    ],
    personalSpecialty: 4,
  },
  {
    name: "Counselor",
    professionalSkills: [
      { id: "bureaucracy", name: "Bureaucracy" },
      { id: "firstAid", name: "First Aid" },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      { id: "humint", name: "HUMINT" },
      { id: "law", name: "Law" },
      { id: "persuade", name: "Persuade" },
      { id: "psychotherapy", name: "Psychotherapy" },
      { id: "search", name: "Search" },
    ],
  },
  {
    name: "Criminalist",
    professionalSkills: [
      { id: "accounting", name: "Accounting" },
      { id: "bureaucracy", name: "Bureaucracy" },
      { id: "computerScience", name: "Computer Science" },
      { id: "criminology", name: "Criminology" },
      { id: "forensics", name: "Forensics" },
      { id: "law", name: "Law" },
      { id: "pharmacy", name: "Pharmacy" },
      { id: "search", name: "Search" },
    ],
  },
  {
    name: "Firefighter",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "demolitions", name: "Demolitions" },
      { id: "drive", name: "Drive" },
      { id: "firstAid", name: "First Aid" },
      { id: "forensics", name: "Forensics" },
      { id: "heavyMachinery", name: "Heavy Machinery" },
      { id: "navigate", name: "Navigate" },
      { id: "search", name: "Search" },
    ],
  },
  {
    name: "Gangster or Deep Cover",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "criminology", name: "Criminology" },
      { id: "dodge", name: "Dodge" },
      { id: "drive", name: "Drive" },
      { id: "persuade", name: "Persuade" },
      { id: "stealth", name: "Stealth" },
    ],
    personalSpecialty: 2,
  },
  {
    name: "Interrogator",
    professionalSkills: [
      { id: "criminology", name: "Criminology" },
      {
        id: "foreign Languages",
        name: "Foreign Language",
        type: "",
      },
      {
        id: "foreign Languages",
        name: "Foreign Language",
        type: "",
      },
      { id: "humint", name: "HUMINT" },
      { id: "law", name: "Law" },
      { id: "persuade", name: "Persuade" },
      { id: "pharmacy", name: "Pharmacy" },
      { id: "search", name: "Search" },
    ],
  },
  {
    name: "Liberal Arts Degree",
    professionalSkills: [
      { id: "special", name: "Anthropology or Archeology" },
      { id: "art", name: "Art", type: "" },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      { id: "history", name: "History" },
      { id: "persuade", name: "Persuade" },
    ],
    personalSpecialty: 3,
  },
  {
    name: "Military Officer",
    professionalSkills: [
      { id: "bureaucracy", name: "Bureaucracy" },
      { id: "firearms", name: "Firearms" },
      { id: "history", name: "History" },
      {
        id: "militaryScience",
        name: "Military Science",
        type: "",
      },
      { id: "navigate", name: "Navigate" },
      { id: "persuade", name: "Persuade" },
      { id: "unarmedCombat", name: "Unarmed Combat" },
    ],
    personalSpecialty: 1,
  },
  {
    name: "MBA",
    professionalSkills: [
      { id: "accounting", name: "Accounting" },
      { id: "bureaucracy", name: "Bureaucracy" },
      { id: "humint", name: "HUMINT" },
      { id: "law", name: "Law" },
      { id: "persuade", name: "Persuade" },
    ],
    personalSpecialty: 3,
  },
  {
    name: "Nurse, Paramedic, or Pre-Med",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "firstAid", name: "First Aid" },
      { id: "medicine", name: "Medicine" },
      { id: "persuade", name: "Persuade" },
      { id: "pharmacy", name: "Pharmacy" },
      { id: "psychotherapy", name: "Psychotherapy" },
      { id: "science", name: "Science", type: "Biology" },
      { id: "search", name: "Search" },
    ],
  },
  {
    name: "Occult Investigation or Conspiracy Theorist",
    professionalSkills: [
      { id: "anthropology", name: "Anthropology" },
      { id: "archeology", name: "Archeology" },
      { id: "computerScience", name: "Computer Science" },
      { id: "criminology", name: "Criminology" },
      { id: "history", name: "History" },
      { id: "occult", name: "Occult" },
      { id: "persuade", name: "Persuade" },
      { id: "search", name: "Search" },
    ],
  },
  {
    name: "Outdoorsman",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "athletics", name: "Athletics" },
      { id: "firearms", name: "Firearms" },
      { id: "navigate", name: "Navigate" },
      { id: "ride", name: "Ride" },
      { id: "search", name: "Search" },
      { id: "stealth", name: "Stealth" },
      { id: "survival", name: "Survival" },
    ],
  },
  {
    name: "Photographer",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "art", name: "Art (Photography)", type: "" },
      { id: "computerScience", name: "Computer Science" },
      { id: "persuade", name: "Persuade" },
      { id: "search", name: "Search" },
      { id: "Stealth", name: "Stealth" },
    ],
    personalSpecialty: 2,
  },
  {
    name: "Pilot or Sailor",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "craft", name: "Craft (Mechanic)", type: "" },
      { id: "firstAid", name: "First Aid" },
      {
        id: "foreignLanguage",
        name: "Foreign Language",
        type: "",
      },
      { id: "navigate", name: "Navigate" },
      { id: "pilot", name: "Pilot", type: "" },
      { id: "survival", name: "Survival" },
      { id: "swim", name: "Swim" },
    ],
  },
  {
    name: "Police Officer",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "criminology", name: "Criminology" },
      { id: "drive", name: "Drive" },
      { id: "firearms", name: "Firearms" },
      { id: "humint", name: "HUMINT" },
      { id: "law", name: "Law" },
      { id: "meleeWeapons", name: "Melee Weapons" },
      { id: "unarmedCombat", name: "Unarmed Combat" },
    ],
  },
  {
    name: "Science Grad Student",
    professionalSkills: [
      { id: "bureaucracy", name: "Bureaucracy" },
      { id: "computerScience", name: "Computer Science" },
      { id: "craft", name: "Craft", type: "" },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      { id: "science", name: "Science", type: "" },
      { id: "science", name: "Science", type: "" },
      { id: "science", name: "Science", type: "" },
      { id: "special", name: "Accounting, Forensics, Law, or Pharmacy" },
    ],
  },
  {
    name: "Social Worker or Criminal Justice Degree",
    professionalSkills: [
      { id: "bureaucracy", name: "Bureaucracy" },
      { id: "criminology", name: "Criminology" },
      { id: "forensics", name: "Forensics" },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      { id: "humint", name: "HUMINT" },
      { id: "law", name: "Law" },
      { id: "persuade", name: "Persuade" },
      { id: "search", name: "Search" },
    ],
  },
  {
    name: "Soldier or Marine",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "artillery", name: "Artillery" },
      { id: "athletics", name: "Athletics" },
      { id: "drive", name: "Drive" },
      { id: "firearms", name: "Firearms" },
      { id: "heavyWeapons", name: "Heavy Weapons" },
      { id: "militaryScience", name: "Military Science", type: "Land" },
      { id: "unarmedCombat", name: "Unarmed Combat" },
    ],
  },
  {
    name: "Translator",
    professionalSkills: [
      { id: "anthropology", name: "Anthropology" },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      {
        id: "foreignLanguage",
        name: "Foreign Languages",
        type: "",
      },
      { id: "history", name: "History" },
      { id: "humint", name: "HUMINT" },
      { id: "persuade", name: "Persuade" },
    ],
    personalSpecialty: 1,
  },
  {
    name: "Urban Explorer",
    professionalSkills: [
      { id: "alertness", name: "Alertness" },
      { id: "athletics", name: "Athletics" },
      { id: "craft", name: "Craft", type: "" },
      { id: "law", name: "Law" },
      { id: "navigate", name: "Navigate" },
      { id: "persuade", name: "Persuade" },
      { id: "search", name: "Search" },
      { id: "stealth", name: "Stealth" },
    ],
  },
];

export const defaultSkillValues = {
  accounting: 10,
  alertness: 20,
  anthropology: 0,
  archeology: 0,
  art: [{ label: "", skill: 0 }],
  artillery: 0,
  athletics: 30,
  bureaucracy: 10,
  computerScience: 0,
  craft: [{ label: "", skill: 0 }],
  criminology: 10,
  demolitions: 0,
  disguise: 10,
  dodge: 30,
  drive: 20,
  firearms: 20,
  firstAid: 10,
  foreignLanguage: [{ label: "", skill: 0 }],
  forensics: 0,
  heavyMachinery: 10,
  heavyWeapons: 0,
  history: 10,
  humint: 10,
  law: 0,
  medicine: 0,
  meleeWeapons: 30,
  militaryScience: [{ label: "", skill: 0 }],
  navigate: 10,
  occult: 10,
  persuade: 20,
  pharmacy: 0,
  pilot: [{ label: "", skill: 0 }],
  psychotherapy: 10,
  ride: 10,
  science: [{ label: "", skill: 0 }],
  search: 20,
  sigint: 0,
  stealth: 10,
  surgery: 0,
  survival: 10,
  swim: 20,
  unarmedCombat: 40,
  unnatural: 0,
};

export const skillsMasterList = [
  {
    id: "accounting",
    name: "Accounting",
    definition:
      "The study of finance and business. Use it to sift through financial records for anomalies, such as a hidden bank account or money laundering.",
  },
  {
    id: "alertness",
    name: "Alertness",
    definition:
      "Alertness detects danger. Use it to hear a safety being switched off, to understand the mumbling on the other side of a wall, to spot the bulge of a pistol hidden under a jacket, or to catch someone who is trying to escape notice using Stealth.",
  },
  {
    id: "anthropology",
    name: "Anthropology",
    definition:
      "The study of living human cultures. Use it to understand morals, religious beliefs, customs, and mores, and to identify (but not translate) obscure languages. Where History is about the distant past and Archeology studies physical remains, Anthropology is about the behaviors of living cultures, how they relate to each other and the past, and how to navigate them safely.",
  },
  {
    id: "archeology",
    name: "Archeology",
    definition:
      "The study of the physical remains of human cultures. Use it to analyze the way of life of a people from ruins, to determine the age of an artifact, to tell a genuine artifact from a fake, and to identify (but not translate) human languages. Where Anthropology is about living cultures and History is a broad study of the past, Archeology discerns meaning from the physical remains of peoples long dead.",
  },
  {
    id: "art",
    name: "Art",
    definition:
      "Expertise at creating or performing a work that sways emotions and opinions. It also encompasses knowledge of techniques and trends in your field, and the ability to tell a particular creator’s real work from a fake. Anyone can draw a rough sketch; the Art skill reflects knowledge, practice, and talent. Each type of Art is a separate skill: Acting, Creative Writing, Dance, Flute, Forgery, Guitar, Painting, Poetry, Scriptwriting, Sculpture, Singing, Violin, etc.",
  },
  {
    id: "artillery",
    name: "Artillery",
    definition:
      "Safe and accurate use of mortars, missiles, howitzers, tank cannons, and other heavy gunnery. Use it to destroy troops or a hard target in battle.",
  },
  {
    id: "athletics",
    name: "Athletics",
    definition:
      "Your Agent trains to get the most out of his or her strength and agility. Strength and Dexterity cover raw physical power and manual dexterity; the Athletics skill represents long practice doing things like running, jumping, climbing, and throwing.",
  },
  {
    id: "bureaucracy",
    name: "Bureaucracy",
    definition:
      "Manipulating the rules and personalities that govern an organization. Use it to locate and borrow supplies, convince an official to provide information or resources, gain credentials for access to a restricted area, or keep the hospital from delving too deeply into the source of your injuries.",
  },
  {
    id: "computerScience",
    name: "Computer Science",
    definition:
      "Deep knowledge of computers, computer systems, and the programs that run them. Use it to recover erased or encrypted data, protect documents from easy access, implant software to hijack a computer system, clone a phone’s SIM card, identify flaws in a security system, impersonate users, or falsify data. It is often complemented SIGINT and by Craft skills like Electrician and Microelectronics.",
  },
  {
    id: "craft",
    name: "Craft",
    definition:
      "Making and repairing sophisticated tools and structures. A job that most people could figure out does not require the Craft skill, only an INT or DEX test. Use Craft for specialized work that needs training: Craft (Electrician) to rewire a house, hotwire a vehicle in a hurry, tap a phone or data line, or spot signs of electrical sabotage; Craft (Mechanic) to jury-rig a machine or get a broken engine working—or to sabotage one beyond repair; Craft (Locksmith) to open a lock without a key; Craft (Gunsmith) to repair a broken firearm. The Handler decides whether a task requires Craft. Each Craft type is a separate skill: Architect, Carpenter, Electrician, Gunsmith, Locksmith, Mechanic, Microelectronics, Plumber, etc.",
  },
  {
    id: "criminology",
    name: "Criminology",
    definition:
      "Knowledge of criminal and conspiratorial behavior. Use it to identify and predict criminal behavior, deduce relationships between members of a conspiracy, analyze criminal activity, examine witness statements, or know whom to talk to in the criminal underground.",
  },
  {
    id: "demolitions",
    name: "Demolitions",
    definition:
      "Safe handling of explosives in a crisis. Use it to disarm a bomb, set a charge to destroy a target remotely, jury-rig an explosive from supplies at the hardware store, or analyze a blast to determine exactly what caused it. Failure when handling a bomb means your Agent needs more time. If it’s a crisis that requires a roll, a fumble means an accidental explosion.",
  },
  {
    id: "disguise",
    name: "Disguise",
    definition:
      "Alter your Agent’s appearance, voice, posture, body language, and mannerisms to avoid recognition without drawing attention.",
  },
  {
    id: "dodge",
    name: "Dodge",
    definition:
      "Evading danger and attacks through instinct and reflexes. Against firearms and explosives, Dodge can get an Agent to cover before bullets and shrapnel fly",
  },
  {
    id: "drive",
    name: "Drive",
    definition:
      "Handling an automobile or a motorcycle safely in a crisis. Unless the Handler says otherwise, every Agent has a driver’s license and can drive a car safely in normal conditions. Use this skill to keep a vehicle safe in a high-speed pursuit or on dangerous terrain.",
  },
  {
    id: "firearms",
    name: "Firearms",
    definition:
      "Safe and accurate shooting with small arms in combat. Use it to hit a target despite the adrenaline, panic, and shock of violence interfering with hand-eye coordination.",
  },
  {
    id: "firstAid",
    name: "First Aid",
    definition:
      "The initial treatment and stabilization of of injuries. Use it to help a character recover lost Hit Points. By comparison, Surgery corrects a severe wound and Medicine ensures long-term recovery.",
  },
  {
    id: "foreignLanguage",
    name: "Foreign Language",
    definition:
      "The initial treatment and stabilization of of injuries. Use it to help a character recover lost Hit Points. By comparison, Surgery corrects a severe wound and Medicine ensures long-term recovery.",
  },
  {
    id: "forensics",
    name: "Forensics",
    definition:
      "Gathering detailed information and evidence using forensic equipment. Use it to record biometric data, determine details about a weapon used or the accelerant that started a fire, discern crucial clues that an ordinary searcher wouldn’t recognize, clean a scene of incriminating evidence, or collect, analyze, and compare fingerprints and DNA samples.",
  },
  {
    id: "heavyMachinery",
    name: "Heavy Machinery",
    definition:
      "Safe operation of a tractor, crane, bulldozer, tank, heavy truck, or other big machine in a crisis.",
  },
  {
    id: "heavyWeapons",
    name: "Heavy Weapons",
    definition:
      "Safe and accurate use of man-portable heavy ordnance such as machine guns and rocket launchers. Use Heavy Weapons to suppress enemies, or destroy a vehicle in combat.",
  },
  {
    id: "history",
    name: "History",
    definition:
      "Uncovering facts and theories about the human past. Use it to remember or find a key fact about the distant past, recognize an obscure reference, or comb a database or library for information that nobody without your deep education could find. While Anthropology is about living cultures and Archeology studies the meaning of ancient relics, History is a broad study of humanity.",
  },
  {
    id: "humint",
    name: "HUMINT",
    definition:
      "Human intelligence. This obtains information about a subject—especially information the subject would rather conceal—through observation, conversation, or examining patterns of behavior and relationships. Use HUMINT to recognize signs of dishonesty from verbal cues and body language, gauge attitude and intentions, cultivate sources of information about a subject, determine what it would take to get a subject to cooperate, or recognize clues of what a subject wants to conceal. HUMINT can notice signs of mental illness, but Psychotherapy would be needed to diag- nose and treat a specific malady. If your Agent also has Criminology, HUMINT can be used to compile a psychological profile to help find a subject. A subject who deliberately tries to deceive your Agent can attempt a Persuade test to oppose your Agent’s HUMINT",
  },
  {
    id: "law",
    name: "Law",
    definition:
      "Using laws and courts to your Agent’s advantage. Use it to get your Agent’s way in court, to determine the correct procedures for handling evidence in a prosecution or a civil case (and how to undermine them), to bullshit your Agent’s way out of legal trouble, or to minimize legal risks. The Law skill applies to your Agent’s native country; using it with another country’s laws requires special training.",
  },
  {
    id: "medicine",
    name: "Medicine",
    definition:
      "The study and treatment of injury and illness. Use it to diagnose the cause of an injury, disease, or poisoning, identify abnormalities such as toxins or diseases, identify the cause and approximate time of death, identify the type of weapon used to kill a victim, identify a dead person’s last meal, or prescribe proper long-term care. By comparison, First Aid keeps a patient alive until surgery is possible and Surgery corrects a severe wound.",
  },
  {
    id: "meleeWeapons",
    name: "Melee Weapons",
    definition:
      "Lethal use of melee weapons in combat. Use it to hurt or kill an opponent with a knife, axe, club, or other weapon.",
  },
  {
    id: "militaryScience",
    name: "Military Science",
    definition:
      "Knowledge of military culture, techniques, and regulations. Use it to identify threats in a battlefield, find accurate ranges, recognize weaknesses in a fortification, deduce the training level of a soldier or unit, reconstruct the events of a battle, or deploy forces advantageously in combat. Each type of Military Science is its own skill. The usual types are Land, Air, and Sea.",
  },
  {
    id: "navigate",
    name: "Navigate",
    definition:
      "Finding your way quickly with maps, charts and tables, orienteering, instruments, or dead reckoning.",
  },
  {
    id: "occult",
    name: "Occult",
    definition:
      "The study of the supernatural as understood by human traditions, including things like conspiracy theories, traditional occultism, fringe science, and cryptozoology. Use Occult to examine and deduce the intent of a ritual or to identify occult traditions, groups, grimoires, tools, symbols, or legends. Occult can never tell the genuinely unnatural from superstition or mythology. That’s the province of the Unnatural skill.",
  },
  {
    id: "persuade",
    name: "Persuade",
    definition:
      "Changing another’s deeply-held decision or desire. Use Persuade to get your Agent’s way when the subject is so stubborn, what your Agent wants is so valuable, or the deception is so flagrant that Charisma isn’t enough. With Persuade, your Agent might convince a witness that what she saw was innocuous and not unnatural, talk a detective into helping you cover up evidence for the greater good, or draw useful intelligence out of an unwilling subject. This skill also allows your Agent to resist persuasion and interrogation in opposed Persuade rolls",
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    definition:
      "Knowledge of drugs, from their ingredients and creation, to their effects, uses, and misuses. Use it to identify and produce medicines and antidotes—as well as poisons. Identifying a drug requires at least 20% skill. Preparing a particularly powerful drug safely, such as one with psychoactive effects, requires at least 40% skill or a successful roll. Misusing Pharmacy is a quick way to kill a patient.",
  },
  {
    id: "pilot",
    name: "Pilot",
    definition:
      "Piloting, navigating, and captaining waterborne, airborne, or aerospace vehicles. Use it to keep a vessel safe in a crisis, such as through a storm or in a dangerous pursuit. Each vessel type is a separate skill: Airplane, Drone, Helicopter, Small Boat, Ship, Space Shuttle, etc. At the Handler’s discretion, skill with one craft may allow piloting a related kind of craft.",
  },
  {
    id: "psychotherapy",
    name: "Psychotherapy",
    definition:
      "The diagnosis and treatment of mental illness. Use it to identify a mental disorder, help a patient recover, talk someone down when a disorder begins to take over, and treat mental illness in the long term. You cannot use Psychotherapy on yourself. Using Psychotherapy to aid someone who suffered exposure to Unnatural forces might cost the therapist SAN;",
  },
  {
    id: "ride",
    name: "Ride",
    definition:
      "Handling, training, and riding horses, donkeys, camels, and other beasts. Exotic mounts may need special training. Use Ride to stay on a mount in a crisis and to keep animals calm and healthy.",
  },
  {
    id: "science",
    name: "Science",
    definition:
      "The deep study of the processes of the world. This is more than common schooling; anyone can attempt an INT test to remember something from a high-school science class. Science is used to find a key insight about the way the universe works—or at least, the way it’s supposed to work. Each Science is a separate skill: Astronomy, Biology, Botany, Chemistry, Engineering, Genetics, Geology, Mathematics, Meteorology, Physics, Planetology, Zoology, etc.",
  },
  {
    id: "search",
    name: "Search",
    definition:
      "Finding things that are concealed or obscured from plain sight. Searching a scene may not require the Search skill, only time and effort, or a sufficiently high INT. Use Search to find an object that was hidden with the Stealth skill, or is otherwise so well hidden or disguised that it needs an expert. The Handler may roll the Search attempt so you don’t know whether your Agent succeeded or failed.",
  },
  {
    id: "sigint",
    name: "SIGINT",
    definition:
      "Signals intelligence. It encompasses encryption, communications intelligence, electronic intelligence, electronic security systems, surveillance of radio and digital communications, and the making and breaking of codes. Use it to install bugs and wiretaps or to find and disable them, to communicate in Morse code, to operate surveillance equipment, and so on.",
  },
  {
    id: "stealth",
    name: "Stealth",
    definition:
      "Concealing your presence or activities. Use it to hide a pistol, camouflage a position, conceal a microphone, leave an envelope at a dead drop unobserved, pick a pocket, move silently, follow without being seen, or blend into a crowd. An Agent attempting Stealth can be detected only by an opposing Alertness or Search skill",
  },
  {
    id: "surgery",
    name: "Surgery",
    definition:
      "The treatment of an injury or abnormality by invasive means. By comparison, First Aid keeps a patient alive until surgery is possible and Medicine ensures long-term recovery.",
  },
  {
    id: "survival",
    name: "Survival",
    definition:
      "Knowledge of the natural world. Use it to find tracks and trails, plan an expedition, predict weather, recognize when fauna or flora are unusual, use the environment to gather other information, or find food, water, and shelter.",
  },
  {
    id: "swim",
    name: "Swim",
    definition:
      "Most Agents can swim for leisure. Use the Swim skill in a dangerous crisis: going a long distance in choppy water, keeping a friend from drowning, or getting to a boat before the tentacled thing below grabs you.",
  },
  {
    id: "unarmedCombat",
    name: "Unarmed Combat",
    definition:
      "Self-defense. A fight between untrained combatants often involves more shoving and shouting than real violence. Use Unarmed Combat to hurt or kill an opponent with your Agent’s bare hands (or feet, elbows, teeth, or head).",
  },
  {
    id: "unnatural",
    name: "Unnatural",
    definition:
      "Knowledge of the fundamental, mind-rending secrets of the universe. Use it to remember, recognize, or research facts about the things humans consider unnatural. This goes far beyond the occult, because the Unnatural skill represents things that are real. Use it to sift through the darkest parts of myth and folklore and recognize which of it is true. Your Agent’s SAN score can never be higher than 99 minus his or her Unnatural skill rating.",
  },
];
