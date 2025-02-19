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
    description:
      "In the FBI, NSA and CIA, there are those who gather information and those who decide what it means. You take information from disparate sources—newspapers, websites, informants, ELINT, and the assets developed by Case Officers—and figure out what it means. In short, your job is the piecing together of unrelated knowledge, a dangerous endeavor in the world of Delta Green.",
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
      "Fluency in another language. Each foreign language is a distinct skill. Having 20% allows halting conversations; at 50% your Agent speaks and reads like a native. The greater the skill, the greater the complexity of the information your Agent comprehends and the less time it takes. You don’t need to roll unless the Handler says the situation is exceptionally difficult. At the Handler’s discretion, special training may allow use of the same skill with a closely related language.",
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
      "Human intelligence. This obtains information about a subject—especially information the subject would rather conceal—through observation, conversation, or examining patterns of behavior and relationships. Use HUMINT to recognize signs of dishonesty from verbal cues and body language, gauge attitude and intentions, cultivate sources of information about a subject, determine what it would take to get a subject to cooperate, or recognize clues of what a subject wants to conceal. HUMINT can notice signs of mental illness, but Psychotherapy would be needed to diagnose and treat a specific malady. If your Agent also has Criminology, HUMINT can be used to compile a psychological profile to help find a subject. A subject who deliberately tries to deceive your Agent can attempt a Persuade test to oppose your Agent’s HUMINT",
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

export const weaponsLists = [
  {
    name: "Unarmed Attack",
    skill: "unarmedCombat",
    damage: "1D4-1",
    armorPiercing: 0,
    expense: "none",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Brass knuckles, heavy flashlight, or steel-toe boot",
    skill: "unarmedCombat",
    damage: "1D4",
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Garrote",
    skill: "unarmedCombat",
    damage: "1D6",
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
    description:
      "Works only from surprise. If it succeeds, the target is pinned and cannot make a sound, and the garrote does 1D6 damage per round until the target escapes or dies. A garotte made from Kevlar can cut through flexible cuffs.",
  },
  {
    name: "Knife",
    skill: "meleeWeapons",
    damage: "1D4",
    armorPiercing: 3,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Hatchet",
    skill: "meleeWeapons",
    damage: "1D4",
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
  },
  {
    name: "Large knife or combat dagger",
    skill: "meleeWeapons",
    damage: "1D6",
    armorPiercing: 3,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Club, nightstick, baton, or collapsible baton",
    skill: "meleeWeapons",
    damage: "1D6",
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Machete, tomahawk, or sword",
    skill: "meleeWeapons",
    damage: "1D8",
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Baseball bat or rifle butt",
    skill: "meleeWeapons",
    damage: "1D8",
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Spear or fixed bayonet",
    skill: "meleeWeapons",
    damage: "1D8",
    armorPiercing: 3,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Wood axe",
    skill: "meleeWeapons",
    damage: "1D10",
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Large sword",
    skill: "meleeWeapons",
    damage: "1D10",
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
  },
  {
    name: "Two-handed sword",
    skill: "meleeWeapons",
    damage: "1D12",
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "handToHand",
    restricted: false,
    description: "Requires special training.",
  },
  {
    name: "Pepper spray keychain",
    skill: "DEX*5",
    range: 1,
    uses: 1,
    radius: "1 target",
    penalty: "–20% for 1 hr",
    expense: "incidental",
    type: "weapon",
    weaponType: "tearGasPepperSpray",
    restricted: false,
  },
  {
    name: "Pepper spray can",
    skill: "DEX*5",
    range: 3,
    uses: 12,
    radius: "2 targets",
    penalty: "–20% for 1 hr",
    expense: "incidental",
    type: "weapon",
    weaponType: "tearGasPepperSpray",
    restricted: false,
  },
  {
    name: "Tear gas grenade, thrown",
    skill: "athletics",
    range: 20,
    uses: 1,
    radius: "10m",
    penalty: "–40% for 1 hr",
    expense: "incidental",
    type: "weapon",
    weaponType: "tearGasPepperSpray",
    restricted: true,
    description: "Requires special training.",
  },
  {
    name: "Tear gas grenade, launched",
    skill: "heavyWeapons",
    range: 50,
    uses: 1,
    radius: "10m",
    penalty: "–40% for 1 hr",
    expense: "incidental",
    type: "weapon",
    weaponType: "tearGasPepperSpray",
    restricted: true,
  },
  {
    name: "Flash-bang grenade, thrown",
    skill: "athletics",
    range: 20,
    uses: 1,
    radius: "10m",
    penalty: "–40%",
    expense: "incidental",
    type: "weapon",
    weaponType: "stunGrenade",
    restricted: true,
    description:
      "Requires special training. Radius halved outdoors. Victim’s penalty lasts 1D6 turns.",
  },
  {
    name: "Flash-bang grenade, launched",
    skill: "heavyWeapons",
    range: 50,
    uses: 1,
    radius: "10m",
    penalty: "–40%",
    expense: "incidental",
    type: "weapon",
    weaponType: "stunGrenade",
    restricted: true,
    description: "Radius halved outdoors. Victim’s penalty lasts 1D6 turns.",
  },
  {
    name: "Stun Gun",
    skill: "DEX*5",
    range: 1,
    uses: 10,
    penalty: "–20% for 1D20 turns",
    expense: "incidental",
    type: "weapon",
    weaponType: "electroshock",
    restricted: false,
  },
  {
    name: "Shock baton",
    skill: "DEX*5",
    range: 1,
    uses: 200,
    penalty: "–20% for 1D20 turns",
    expense: "incidental",
    type: "weapon",
    weaponType: "electroshock",
    restricted: false,
  },
  {
    name: "CED pistol",
    skill: "DEX*5",
    range: 4,
    uses: 4,
    penalty: "–20% for 1D20 turns",
    expense: "standard",
    type: "weapon",
    weaponType: "electroshock",
    restricted: false,
    description: "Requires special training.",
  },
  {
    name: "Light pistol",
    skill: "firearms",
    range: 10,
    damage: "1D8",
    lethality: 0,
    ammoCapacity: 7,
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "firearms",
    restricted: false,
    description:
      "Revolver capacity: 6. Examples: .22 LR, .32 ACP, .380 ACP, .38 Special: S&W Model 36 Chief’s Special, Walther PPK.",
  },
  {
    name: "Medium pistol",
    skill: "firearms",
    range: 15,
    damage: "1D10",
    lethality: 0,
    ammoCapacity: 15,
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "firearms",
    restricted: false,
    description:
      "Revolver capacity: 6. Examples: 9×19 mm, .40 S&W, .45 ACP: Beretta Mod 92FS (M9), Colt M1911A1, Glock 17, Glock 22.",
  },
  {
    name: "Heavy pistol",
    skill: "firearms",
    range: 20,
    damage: "1D12",
    lethality: 0,
    ammoCapacity: 10,
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "firearms",
    restricted: false,
    description:
      "Revolver capacity: 6. Examples: 10×25mm Auto, .357 Magnum, .44 Magnum, .50 AE: Colt Delta Elite, Glock 20, S&W Model 13.",
  },
  {
    name: "Shotgun (Shot)",
    skill: "firearms",
    range: 75,
    damage: "2D8*",
    lethality: 0,
    ammoCapacity: 5,
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "firearms",
    restricted: false,
    description:
      "Half damage beyond base range. Shotgun examples (12-gauge): Mossberg Model 500, Remington Model 870, Ruger Red Label.",
  },
  {
    name: "Shotgun (Slug)",
    skill: "firearms",
    range: 75,
    damage: "2D8*",
    lethality: 0,
    ammoCapacity: 5,
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "firearms",
    restricted: false,
    description: "Damage reduced to 2D6 beyond base range.",
  },
  {
    name: "Shotgun (Nonlethal)",
    skill: "firearms",
    range: 10,
    damage: "1D6 & Stunned",
    lethality: 0,
    ammoCapacity: 5,
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "firearms",
    restricted: false,
  },
  {
    name: "Light rifle or carbine",
    skill: "firearms",
    range: 100,
    damage: "1D12",
    lethality: 10,
    ammoCapacity: 30,
    armorPiercing: 3,
    expense: "standard",
    type: "weapon",
    weaponType: "firearms",
    restricted: true,
    description:
      "Use the Lethality rating if firing bursts. Examples: 5.45 x 39mm, 5.56mm NATO: AR-15, Colt M4, FN SCAR-L. Heavier rounds such as 7.62x39mm (AK-47) and .30-30 Winchester inflict 1D12+1 damage.",
  },
  {
    name: "Submachine gun (SMG)",
    skill: "firearms",
    range: 50,
    damage: "1D10",
    lethality: 10,
    ammoCapacity: 30,
    armorPiercing: 0,
    expense: "unusual",
    type: "weapon",
    weaponType: "firearms",
    restricted: true,
    description:
      "Use the Lethality rating if firing bursts. Examples: 5.7×28 mm, 9×19mm, .45 ACP: B&T MP9, FN P90, H&K MP5, IMI Uzi, KRISS Vector, MAC-Ingram M10.",
  },
  {
    name: "Heavy rifle",
    skill: "firearms",
    range: 150,
    damage: "1D12+2",
    lethality: 10,
    ammoCapacity: 20,
    armorPiercing: 5,
    expense: "unusual",
    type: "weapon",
    weaponType: "firearms",
    restricted: true,
    description:
      "Use the Lethality rating if firing bursts. Examples: 7.62 mm NATO, 7.62x54mm, .30-06: H&K G3, FN FAL, Izhmash SVD, M1 Garand, Remington Model 700 (M24).",
  },
  {
    name: "Very heavy rifle",
    skill: "firearms",
    range: 250,
    damage: "1D12+2",
    lethality: 20,
    ammoCapacity: 10,
    armorPiercing: 5,
    expense: "major",
    type: "weapon",
    weaponType: "firearms",
    restricted: false,
    description:
      "Examples: .408 CheyTac, .50 Browning: Barrett Model 82A1, CheyTac M200.",
  },
  {
    name: "Hand grenade",
    skill: "athletics",
    range: 20,
    lethality: 15,
    radius: "10m",
    ammoCapacity: 0,
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description: "Examples: M67, RGO.",
  },
  {
    name: "Rocket-propelled grenade launcher (RPG)",
    skill: "heavyWeapons",
    range: 200,
    lethality: 30,
    radius: "10m",
    ammoCapacity: 1,
    armorPiercing: 20,
    expense: "standard",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description: "Examples: ATK M72 LAW, Bazalt RPG-7V, Bofors AT4 (M136).",
  },
  {
    name: "Handheld flamethrower",
    skill: "heavyWeapons",
    range: 5,
    lethality: 10,
    radius: "1m",
    ammoCapacity: 20,
    armorPiercing: 0,
    expense: "unusual",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: false,
    description: "Example: Ion XM42.",
  },
  {
    name: "Military flamethrower",
    skill: "heavyWeapons",
    range: 10,
    lethality: 10,
    radius: "2m",
    ammoCapacity: 5,
    armorPiercing: 0,
    expense: "unusual",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description: "Example: AEC M9A1-7.",
  },
  {
    name: "General-purpose machine gun (GPMP)",
    skill: "heavyWeapons",
    range: 300,
    lethality: 15,
    radius: "Per Burst",
    ammoCapacity: 100,
    armorPiercing: 3,
    expense: "major",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description: "Examples: FN MAG (M240), Kovrov PKM, Saco M60.",
  },
  {
    name: "Grenade launcher (GL)",
    skill: "heavyWeapons",
    range: 150,
    lethality: 15,
    radius: "10m",
    ammoCapacity: 1,
    armorPiercing: 0,
    expense: "major",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description:
      "Revolver capacity: 6. Examples: Colt M203, H&K M320, Milkor M32, Springfield M79.",
  },
  {
    name: "Grenade machine gun (GMG)",
    skill: "heavyWeapons",
    range: 300,
    lethality: 15,
    radius: "10m",
    ammoCapacity: 30,
    armorPiercing: 0,
    expense: "major",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description:
      "*If firing a burst (5 grenades), Lethality is 20%. Examples: H&K GMG, Saco MK 19 MOD 3, KBP AGS-17.",
  },
  {
    name: "Heavy machine gun (HMG)",
    skill: "heavyWeapons",
    range: 400,
    lethality: 20,
    radius: "Per burst",
    ammoCapacity: 100,
    armorPiercing: 5,
    expense: "major",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description: "Examples: Browning M2HB, Degtyaryov DShKM, Kovrov NSV.",
  },
  {
    name: "Light machine gun (LMG)",
    skill: "heavyWeapons",
    range: 200,
    lethality: 10,
    radius: "Per burst",
    ammoCapacity: 200,
    armorPiercing: 3,
    expense: "major",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description: "Examples: FN MINIMI (M249 SAW), Molot RPK.",
  },
  {
    name: "Autocannon",
    skill: "heavyWeapons",
    range: 400,
    lethality: 30,
    radius: "3m",
    ammoCapacity: 100,
    armorPiercing: 5,
    expense: "extreme",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description: "Examples: ATK M242 Bushmaster, KBP 2A70.",
  },
  {
    name: "Minigun",
    skill: "heavyWeapons",
    range: 300,
    lethality: 20,
    radius: "3m",
    ammoCapacity: 4000,
    armorPiercing: 5,
    expense: "extreme",
    type: "weapon",
    weaponType: "heavyWeapons",
    restricted: true,
    description: "Examples: Dillon GAU-17/A, GE M134, KBP GShG-7.62.",
  },
  {
    name: "ANFO explosive",
    skill: "demolitions",
    range: 0,
    lethality: 30,
    radius: "20m",
    ammoCapacity: 0,
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "demolitions",
    restricted: false,
  },
  {
    name: "C4 plastic explosive block, 570 g.",
    skill: "demolitions",
    range: 0,
    lethality: 30,
    radius: "2m",
    ammoCapacity: 0,
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "demolitions",
    restricted: true,
  },
  {
    name: "Improvised explosive device (IED)",
    skill: "demolitions",
    range: 0,
    lethality: 15,
    radius: "10m",
    ammoCapacity: 0,
    armorPiercing: 0,
    expense: "incidental",
    type: "weapon",
    weaponType: "demolitions",
    restricted: true,
  },
  {
    name: "Large IED",
    skill: "demolitions",
    range: 0,
    lethality: 60,
    radius: "75m",
    ammoCapacity: 0,
    armorPiercing: 0,
    expense: "standard",
    type: "weapon",
    weaponType: "demolitions",
    restricted: true,
  },
  {
    name: "Explosively-formed penetrator mine",
    skill: "demolitions",
    range: 0,
    lethality: 25,
    radius: "10m",
    ammoCapacity: 0,
    armorPiercing: 20,
    expense: "standard",
    type: "weapon",
    weaponType: "demolitions",
    restricted: true,
  },
  {
    name: "General-purpose bomb",
    skill: "artillery",
    range: "Air-dropped",
    lethality: 70,
    radius: "100m",
    ammoCapacity: 0,
    armorPiercing: 10,
    expense: "unusual",
    type: "weapon",
    weaponType: "artillery",
    restricted: true,
  },
  {
    name: "Heavy mortar",
    skill: "artillery",
    range: "4km",
    lethality: 35,
    radius: "50m",
    ammoCapacity: 1,
    armorPiercing: 5,
    expense: "major",
    type: "weapon",
    weaponType: "artillery",
    restricted: true,
  },
  {
    name: "Light mortar",
    skill: "artillery",
    range: "2km",
    lethality: 20,
    radius: "25m",
    ammoCapacity: 1,
    armorPiercing: 0,
    expense: "major",
    type: "weapon",
    weaponType: "artillery",
    restricted: true,
  },
  {
    name: "Anti-tank guided missile (ATGM)",
    skill: "artillery",
    range: "4km",
    lethality: 45,
    radius: "50m",
    ammoCapacity: 0,
    armorPiercing: 25,
    expense: "extreme",
    type: "weapon",
    weaponType: "artillery",
    restricted: true,
  },
  {
    name: "Artillery",
    skill: "artillery",
    range: "5km",
    lethality: 50,
    radius: "100m",
    ammoCapacity: 1,
    armorPiercing: 10,
    expense: "extreme",
    type: "weapon",
    weaponType: "artillery",
    restricted: true,
  },
  {
    name: "Cruise missile",
    skill: "artillery",
    range: "100km",
    lethality: 80,
    radius: "150m",
    ammoCapacity: 0,
    armorPiercing: 15,
    expense: "extreme",
    type: "weapon",
    weaponType: "artillery",
    restricted: true,
  },
];

export const armorList = [
  {
    name: "Riot helmet",
    armorRating: "+1",
    description:
      "Adds its Armor Rating to any other armor. Effective only against melee weapons, thrown weapons, and unarmed attacks. Cannot be concealed.",
    expense: "standard",
    type: "armor",
  },
  {
    name: "Kevlar helmet",
    armorRating: "+1",
    description:
      "Adds its Armor Rating to any other armor. Cannot be concealed.",
    expense: "standard",
    type: "armor",
  },
  {
    name: "Kevlar vest",
    armorRating: 3,
    description:
      "If worn below outer garments, noticing it requires an Alertness test.",
    expense: "standard",
    type: "armor",
  },
  {
    name: "Reinforced kevlar vest",
    armorRating: 4,
    description:
      "If worn below outer garments, noticing it requires an Alertness test at +20%.",
    expense: "unusual",
    type: "armor",
  },
  {
    name: "Tactical body armor",
    armorRating: 5,
    description: "Cannot be concealed.",
    expense: "unusual",
    type: "armor",
  },
  {
    name: "Bomb suit",
    armorRating: 10,
    description: "Already includes a helmet. Cannot be concealed.",
    expense: "extreme",
    type: "armor",
  },
];

export const vehicleList = [
  {
    name: "Motorcycle",
    hp: "15 to 20",
    armor: 0,
    speed: "Fast",
    expense: "major",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Sedan",
    hp: "25 to 30",
    armor: 3,
    speed: "Average",
    expense: "major",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Pickup or SUV",
    hp: "30 to 35",
    armor: 3,
    speed: "Average",
    expense: "major",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Armored SUV",
    hp: 35,
    armor: 10,
    speed: "Average",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Humvee",
    hp: 40,
    armor: 3,
    speed: "Average",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Armored Humvee",
    hp: 40,
    armor: 10,
    speed: "Slow",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Semi truck",
    hp: 45,
    armor: 3,
    speed: "Slow",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "MRAP armored vehicle",
    hp: 60,
    armor: 20,
    speed: "Slow",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Armored personnel carrier",
    hp: 80,
    armor: 20,
    speed: "Slow",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Mid-20th century tank",
    hp: 90,
    armor: 20,
    speed: "Slow",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Modern tank",
    hp: 100,
    armor: 25,
    speed: "Slow",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Modern tank",
    hp: 100,
    armor: 25,
    speed: "Slow",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "ground",
  },
  {
    name: "Combat rubber raiding craft",
    hp: 10,
    armor: 0,
    speed: "Slow",
    expense: "unusual",
    type: "vehicle",
    vehicleType: "water",
  },
  {
    name: "Rigid-hulled inflatable boat",
    hp: 20,
    armor: 0,
    speed: "Slow",
    expense: "major",
    type: "vehicle",
    vehicleType: "water",
  },
  {
    name: "River patrol boat",
    hp: 30,
    armor: 0,
    speed: "Slow",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "water",
  },
  {
    name: "Speed boat",
    hp: 25,
    armor: 0,
    speed: "Average",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "water",
  },
  {
    name: "Speed boat",
    hp: 25,
    armor: 0,
    speed: "Average",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "water",
  },
  {
    name: "Civilian helicopter",
    hp: 20,
    armor: 0,
    speed: "Average",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "air",
  },
  {
    name: "Commuter plane",
    hp: 25,
    armor: 0,
    speed: "Average",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "air",
  },
  {
    name: "Police helicopter",
    hp: 30,
    armor: 0,
    speed: "Fast",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "air",
  },
  {
    name: "Attack helicopter",
    hp: 30,
    armor: 10,
    speed: "Fast",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "air",
  },
  {
    name: "Passenger jet",
    hp: 50,
    armor: 0,
    speed: "Special",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "air",
  },
  {
    name: "Figther jet",
    hp: 40,
    armor: 0,
    speed: "Special",
    expense: "extreme",
    type: "vehicle",
    vehicleType: "air",
  },
];

export const otherGearAndServicesList = [
  {
    name: "Same-day bus ticket",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "transportation",
  },
  {
    name: "Car or SUV, rented for a week",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "transportation",
  },
  {
    name: "Same-day interstate plane or train ticket",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "transportation",
  },
  {
    name: "Same-day international plane ticket to the developed world",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "transportation",
  },
  {
    name: "Chartered helicopter, one trip",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "transportation",
  },
  {
    name: "Same-day international plane ticket to the developing world",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "transportation",
  },
  {
    name: "Chartered jet, one trip",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "transportation",
  },
  {
    name: "A night or two at a cheap motel",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "lodgings",
  },
  {
    name: "A week at a motel or a short-term apartment",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "lodgings",
  },
  {
    name: "A week at a fine hotel",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "lodgings",
  },
  {
    name: "A week at an exclusive resort",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "lodgings",
  },
  {
    name: "Private accommodations at the most exclusive locations",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "lodgings",
  },
  {
    name: "Forged passport or identification documents",
    description:
      "Requires official requisition or Criminology to find a reliable source.",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "coversAndLegends",
  },
  {
    name: "Forged passport from a G-7 country (Canada, E.U., Japan, U.S., U.K.)",
    description:
      "Requires official requisition or Criminology to find a reliable source.",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "coversAndLegends",
  },
  {
    name: "A new identity",
    description:
      "Requires official requisition or Criminology to find a reliable source.",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "coversAndLegends",
  },

  {
    name: "Public storage unit, one month",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "storage",
  },
  {
    name: "Public storage unit, one year",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "storage",
  },
  {
    name: "Large public storage unit, one year",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "storage",
  },

  {
    name: "Flexible cuffs",
    description:
      "Requires a blade or scissors to cut open. A zip-tie used as makeshift cuffs can be broken open with a STR×5 test at +20%.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "restraints",
  },
  {
    name: "Handcuffs",
    description:
      "Require a cuff key, special training with lockpicks, or Craft (Locksmith) to open; or a DEX * 5 test at −20% to wriggle out.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "restraints",
  },

  {
    name: "Access to pay-for-use journals and professional publications",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "research",
  },
  {
    name: "Get expert advice from a professional or academic",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "research",
  },
  {
    name: "Credentials for unescorted entry into a restricted site",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "research",
  },
  {
    name: "Independent verification or review from an academic expert",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "research",
  },
  {
    name: "Specialized scientific equipment or artifacts from an outside source for “testing and review”",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "research",
  },

  {
    name: "Burner phone",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Short-range walkie talkie or early-generation mobile phone",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "“Script kiddie” hacking software",
    description:
      "Requires Computer Science; a failed Luck roll indicates it’s faulty.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Earpiece communicator set",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Ordinary computer",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Tablet computer or smartphone",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "3D printer (plastic)",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Satellite phone",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Hire a hacker to defeat basic encryption",
    description:
      "Requires Computer Science or Criminology to find a reliable one if the task is illegal.",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Powerful computer",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Cutting-edge encryption or data-mining software",
    description: "Requires Computer Science or special training (INT).",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
    restricted: true,
  },
  {
    name: "Advanced data-analysis software",
    description: "Requires Computer Science or special training (INT).",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "3D printer (metal)",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Hire a hacker to defeat advanced encryption",
    description:
      "Requires Computer Science or Criminology to find a reliable one if the task is illegal.",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
  },
  {
    name: "Portable IMSI catcher for cell surveillance",
    description:
      "Requires Computer Science or special training (INT). Has 2 km. range, or 200 m. for a model that can me worn under clothes. A vehicular model has 30 km. range as an Extreme expense.",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
    restricted: true,
  },
  {
    name: "Exclusive use of a dedicated communications satellite",
    description: "Requires Computer Science or special training (INT).",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "communicationsAndComputers",
    restricted: true,
  },

  {
    name: "Simple directional microphone",
    description: "10m range in typical urban conditions.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Bug detector",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Fiber optic scope",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "GPS jammer",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Voice-activated recorder",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Directional microphone & acoustic software",
    description:
      "20 m. range in typical urban conditions. Advanced versions have 50m range as an Unusual expense.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Basic, open-market drone",
    description: "Requires special training (DEX).",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Audio jammer (RF/cellular)",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "GPS tracking device",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Advanced drone",
    description: "Requires Pilot (Drone) skill.",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Ground-penetrating radar",
    description:
      "About the size of a lawn mower; requires special training (INT).",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },
  {
    name: "Military-grade drone",
    description: "Requires Pilot (Drone) skill; can carry weapons.",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "surveillance",
  },

  {
    name: "Large flashlight",
    description: "Useful to 100m. Runs for 10 hours.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "lightingAndVision",
  },
  {
    name: "Tactical light or weapon light",
    description:
      "Useful to 50 m. Runs for 1 hour. Available with optional infrared (IR) or ultraviolet (UV) filters. IR can only be seen with night vision goggles or sights. UV will make “invisible” evidence visible, such as bodily fluids and special inks.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "lightingAndVision",
  },
  {
    name: "Ordinary binoculars",
    description:
      "×10 magnification; allows Alertness tests at greater distance.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "lightingAndVision",
  },
  {
    name: "Civilian night vision goggles (NVG)",
    description:
      "Allows operating in reduced light. Runs for 100 hours. Most skill tests such as Driving, Pilot, and ranged attack rolls are at a −20% penalty. The attack penalty can be avoided if the NVGs are used together with a targeting laser in IR mode.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "lightingAndVision",
  },
  {
    name: "Advanced binoculars or telescope",
    description:
      "×20 magnification; allows Alertness tests at greater distance.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "lightingAndVision",
  },
  {
    name: "Powerful telescope",
    description:
      "×50 magnification; allows Alertness tests at greater distance.",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "lightingAndVision",
  },
  {
    name: "Military-grade night vision goggles",
    description:
      "RESTRICTED. Allows operating in reduced light conditions. Most skills are at no penalty. If finely detailed perception is required then a −20% penalty applies.",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "lightingAndVision",
    restricted: true,
  },

  {
    name: "Lockpick kit",
    description: "Requires special training (DEX).",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "breakingAndEntering",
  },
  {
    name: "Halligan forcible-entry tool",
    description: "Allows a STR test to get through a hard barrier.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "breakingAndEntering",
  },
  {
    name: "Lockpick gun",
    description: "Works only on simple tumbler locks.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "breakingAndEntering",
  },

  {
    name: "Individual first aid kit",
    description: "Adds +20% to a single First Aid roll.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "Small fire extinguisher (CO2)",
    description:
      "Douses a small fire. Can be used with a DEX×5 test to spray an animal such as a dog in the face to make it run away.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "Handheld GPS",
    description:
      "Does not require a radio signal. Battery life is 14 to 25 hours.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "Basic camping gear",
    description:
      "Cheap daypack, bivouac sack, survival blanket, button compass, flashlight, matches, meal bars, water purification tablets. Grants +20% to Survival for 3 days.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "Personal protective equipment (PPE)",
    description:
      "Apron, goggles, gloves, breath mask; provides 2 Armor against chemical and acid splashes and fumes.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "Heavy-duty fire extinguisher",
    description: "Douses a room-sized fire.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "Gas mask",
    description: "Effective against airborne hazards.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "HAZMAT suit",
    description:
      "Effective against airborne or contact hazards. Requires 30 minutes to don safely. (Don’t forget to tape up.)",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "First responder medical kit",
    description:
      "Bandages, IV kits and fluids, medications (narcotics, anasthetics, antibiotics, etc.), stethoscope, suture and intubation kits, hemostatic gel, bag valve mask. Adds +20% to four First Aid rolls.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "Extended camping gear",
    description:
      "Large backpack, sleeping bag, tent, compass, headlamp, firestarter, dehydrated meals, water filter, canister stove, hiking clothes. Grants +20% to Survival for 14 days.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "SCUBA gear",
    description: "Requires special training (Swim).",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },
  {
    name: "Polypropylene barrel filled with acid",
    description:
      "Sufficient to reduce a corpse to sludge. Remember to wear PPE!",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "emergencyAndSurvival",
  },

  {
    name: "Off-the-books first aid, no questions asked",
    description:
      "Requires Criminology to find a medical professional of loose ethics.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "medicalCare",
  },
  {
    name: "Off-the-books drugs or minor surgery, no questions asked",
    description:
      "Requires Criminology to find a medical professional of loose ethics.",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "medicalCare",
  },
  {
    name: "Off-the-books major surgery, no questions asked",
    description:
      "Requires Criminology to find a medical professional of loose ethics.",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "medicalCare",
  },
  {
    name: "Bribing an incinerator, crematorium, or furnace worker to turn a blind eye while you burn a corpse",
    description: "Requires Criminology to find a worker willing to cooperate.",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "medicalCare",
  },

  {
    name: "Holographic sight",
    description:
      "Gives a +20% bonus to hit as long as your Agent has taken nodamage since his or her last action.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "accessories",
  },
  {
    name: "Night vision sight",
    description:
      "Allows aiming in reduced light conditions such as starlight. Useful to 400m. Runs for 100 hours. Doubles a firearm’s base range at night if your Agent spends the previous turn taking the Aim action.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "accessories",
  },
  {
    name: "Sound suppressor",
    description:
      "RESTRICTED. Requires an Alertness test to hear from beyond a wall or a door. An especially quiet suppressed shot, such as a light pistol, incurs a −20% penalty.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "accessories",
    restricted: true,
  },
  {
    name: "Targeting laser",
    description:
      "Gives a +20% bonus to hit as long as your Agent has taken no damage since his or her last action. Does not require your Agent to raise the gun to his or her eyes. Useful to 200 m. Runs for 100 hours. Also available as an Unusual expense with an infrared (IR) mode that can only be seen with NVGs or night-vision sights.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "accessories",
  },
  {
    name: "Telescopic sight",
    description:
      "Doubles a firearm’s base range if your Agent spent the previous turn taking the Aim action.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "accessories",
  },
  {
    name: "Advanced Combat Optical Gunsight (ACOG)",
    description:
      "Combines the effects of a holographic sight and a telescopic sight.",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "accessories",
  },
  {
    name: "Thermal Weapon Sight (TWS)",
    description:
      "Allows aiming in complete darkness. Useful to 400 m. Runs for two hours. Doubles a firearm’s base range if you spent the previous turn taking the Aim action.",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "accessories",
  },
  {
    name: "“Ghost gun” machine: heavy-duty desktop 3D printer with software",
    description:
      "Can mill a block of aluminum into the lower receiver for a firearm. Other gun parts can be bought without licensing as an Unusual expense. Firearm assembly requires an INT×5 test with special training, or a Craft (Gunsmithing) test. If the test fails, the gun is unreliable;",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "accessories",
  },

  {
    name: "Access to unclassified but restricted files such as criminal or financial records",
    description:
      "Must relate to an official investigation. If not, a failed Luck roll means it draws official review.",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Holding a prisoner for 24 hours with no questions asked",
    description:
      "Must relate to an official investigation. If not, a failed Luck roll means it draws official review.",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Use for a day of an agency-owned sedan, patrol vehicle, or SUV",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Acquiring data from an unrelated case",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Drone surveillance of a specific suspect for a day or two",
    description: "Automatically elicits official review",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Use for a day of an agency-owned quad runner, patrol boat or other small, specialized craft",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Deployment of 2–5 local uniformed police",
    description: "Automatically elicits official review",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Surveillance data from an ongoing case",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Order a wiretap",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "An armored SUV requisitioned for a week",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },
  {
    name: "Calling in a regional FBI SWAT team for a raid",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "lawEnforcement",
  },

  {
    name: "Secure a seat on an already scheduled support flight (Space Available or Space-A)",
    expense: "incidental",
    type: "gearAndServices",
    gearAndServicesType: "military",
  },
  {
    name: "Calling in a special operations team for security or evacuation",
    description: "Automatically elicits official review",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "military",
  },
  {
    name: "Helicopter support (transport or surveillance)",
    description: "Automatically elicits official review",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "military",
  },
  {
    name: "Missile strike",
    description:
      "Automatically elicits official review, will not be performed on American soil.",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "military",
  },

  {
    name: "Access to another agency’s classified files (not related to national security)",
    description:
      "Includes digital communications data from NarusInsight (FBI) or XKeyscore (NSA).",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "intelligence",
  },
  {
    name: "Drone flyover and surveillance over a specific site",
    description: "Automatically elicits official review.",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "intelligence",
  },
  {
    name: "Holding a prisoner at a “black site” for 48 hours",
    description: "An Agent needs to know of the black site in advance.",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "intelligence",
  },
  {
    name: "Acquire clearance to be present during an interrogation or debriefing",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "intelligence",
  },
  {
    name: "Acquire sophisticated fake documents",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "intelligence",
  },
  {
    name: "Access to classified files related to national security (which the Agent has no “need to know”)",
    description:
      "Technically espionage. It can result in firing and/or prosecution if detected.",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "intelligence",
  },
  {
    name: "Extended drone or satellite surveillance over a specific site (more than a short flyover)",
    description: "Automatically elicits official review",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "intelligence",
  },
  {
    name: "Call in support from a covert operative team in the area",
    description: "Automatically elicits official review",
    expense: "extreme",
    type: "gearAndServices",
    gearAndServicesType: "intelligence",
  },

  {
    name: "Credentials for unescorted entry into a restricted site",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "publicSafety",
  },
  {
    name: "Access to sensitive files outside the Agent’s specialty",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "publicSafety",
  },
  {
    name: "Place a request for local law enforcement to make an arrest (with justification)",
    description: "Automatically elicits official review",
    expense: "standard",
    type: "gearAndServices",
    gearAndServicesType: "publicSafety",
  },
  {
    name: "Get a warrant for access to an industrial site for alleged environmental crimes",
    description: "Automatically elicits official review",
    expense: "unusual",
    type: "gearAndServices",
    gearAndServicesType: "publicSafety",
  },
  {
    name: "Temporarily shut down a site for investigation of environmental crimes",
    description: "Automatically elicits official review",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "publicSafety",
  },
  {
    name: "Quarantine a single location",
    description: "Automatically elicits official review",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "publicSafety",
  },
  {
    name: "Quarantine an area",
    description: "Automatically elicits official review",
    expense: "major",
    type: "gearAndServices",
    gearAndServicesType: "publicSafety",
  },
];

export const GlossaryTerms = [
  {
    name: "Babble Juice",
    definition: "Slang for any kind of truth drug.",
    type: "equipment",
  },
  {
    name: "Biological Agent",
    definition: "A harmful microorganism.",
    type: "equipment",
  },
  {
    name: "Bioregulator",
    definition:
      "A biochemical that regulates bodily functions. Some (endogenous) occur naturally. Others can be synthesized.",
    type: "equipment",
  },
  {
    name: "Blister Agent",
    definition: "A chemical that blisters the skin.",
    type: "equipment",
  },
  {
    name: "Blood Agent",
    definition:
      "A chemical (usually cyanide or arsenic-based) that interferes with the exchange of oxygen and carbon dioxide between blood and tissues.",
    type: "equipment",
  },
  {
    name: "Blue Suit",
    definition: "A CHEMTURION SPACE SUIT.",
    type: "equipment",
  },
  {
    name: "Bona Fides",
    definition: "Documents which back up a cover identity.",
    type: "equipment",
  },
  {
    name: "Bubble Stretcher",
    definition:
      "Portable biocontainment pod used for transportation of a HOT patient.",
    type: "equipment",
  },
  {
    name: "Burner",
    definition:
      "A cheap, disposable pre-paid cell phone for use during an operation.",
    type: "equipment",
  },
  {
    name: "Chemical Agent",
    definition:
      "A chemical intended to cause harm, not including riot-control agents and agents which create smoke or flame.",
    type: "equipment",
  },
  {
    name: "Chemical Weapon",
    definition:
      "A toxic chemical used to cause harm, or a munition or device designed to deliver it.",
    type: "equipment",
  },
  {
    name: "Chemturion Space Suit",
    definition:
      "Pressurized, heavy-duty bio-hazard environment suit used in BIOSAFETY LEVEL 4 containment areas. Also known as a “blue suit” because of its color.",
    type: "equipment",
  },
  {
    name: "Choking Agent",
    definition: "A chemical that injures the lungs.",
    type: "equipment",
  },
  {
    name: "Dirty Bomb",
    definition:
      "A device that uses a conventional explosive to disperse radioactive material.",
    type: "equipment",
  },
  {
    name: "Hatbox",
    definition:
      "A cylindrical biohazard container made of cardboard. Also known as an ice-cream container.",
    type: "equipment",
  },
  {
    name: "Hush Puppy",
    definition:
      "A silenced, semi-automatic pistol designed to fire one shot per pull of the trigger and not to automatically eject a spent casing and chamber a new round. The action must be worked after each shot, but the only sound produced other than the suppressed shot is the sound of the hammer falling against the firing pin.",
    type: "equipment",
  },
  {
    name: "IED",
    definition:
      "Improvised explosive device, usually made from easily-obtained materials.",
    type: "equipment",
  },
  {
    name: "Incapacitating Agent",
    definition:
      "A chemical that temporarily impairs physiological and/or mental functions by affecting the central nervous system.",
    type: "equipment",
  },
  {
    name: "Industrial Agent",
    definition:
      "A chemical that, even if harmful, was created for use in industrial operations.",
    type: "equipment",
  },
  {
    name: "Jock Strap Medals",
    definition:
      "CIA decorations kept in a safe at Langley HQ until the case officer retires.",
    type: "equipment",
  },
  {
    name: "Nerve Agent",
    definition: "A chemical that interferes with the central nervous system.",
    type: "equipment",
  },
  {
    name: "Pathogen",
    definition:
      "An organism capable of causing serious disease or death in humans.",
    type: "equipment",
  },
  {
    name: "Racal Suit",
    definition:
      "Positive-pressure biohazard suit with a battery-powered air supply. For use in fieldwork with extreme airborne hazards. Also known as an “orange suit.”",
    type: "equipment",
  },
  {
    name: "Radiological Dispersal Device (RDD)",
    definition:
      "A device, other than a nuclear weapon, designed to disseminate radiocative material.",
    type: "equipment",
  },
  {
    name: "RQ-1 Predaor Unmanned Aerial Vehicle",
    definition:
      "A long-range drone used for reconnaissance, surveillance, and target acquisition.",
    type: "equipment",
  },
  {
    name: "Shoe",
    definition: "A false passport.",
    type: "equipment",
  },
  {
    name: "Soap",
    definition:
      "Nickname for the “truth drug” sodium pentothal, a powerful barbiturate-class sedative.",
    type: "equipment",
  },
  {
    name: "Throwaway",
    definition:
      "A disposable firearm, usually with the serial numbers filed off.",
    type: "equipment",
  },
  {
    name: "Toxin Agent",
    definition:
      "An organic poison secreted by an animal or vegetable; some may be synthesized.",
    type: "equipment",
  },
  {
    name: "Weapon of Mass Destruction (WMD)",
    definition: "A weapon capable of widespread death and/or destruction.",
    type: "equipment",
  },
  {
    name: "Wire",
    definition: "A wiretap or body microphone.",
    type: "equipment",
  },
  {
    name: "Agent",
    definition:
      "Typically an employee of a government agency, particularly one who represents the agency at large. A notable exception is the intelligence community, where an agent is specifically an asset who provides information to a case officer called a handler.",
    type: "individuals",
  },
  {
    name: "Agent of Influence",
    definition:
      "An intelligence asset left in place to change the policy of his or her organization.",
    type: "individuals",
  },
  {
    name: "Agent Provocatuer",
    definition:
      "An intelligence asset who stirs up trouble, usually as a pretext to an intervention.",
    type: "individuals",
  },
  {
    name: "Agent-in-Place",
    definition: "An intelligence asset working within a foreign government.",
    type: "individuals",
  },
  {
    name: "Border Rats",
    definition:
      "DEA, Border Patrol and Customs agents who work the U.S.-Mexican border.",
    type: "individuals",
  },
  {
    name: "Case Officer",
    definition: "An intelligence officer who manages agents.",
    type: "individuals",
  },
  {
    name: "Clean Operative",
    definition:
      "An illegal operative who has not come to the attention of law enforcement or intelligence organizations.",
    type: "individuals",
  },
  {
    name: "Cleaner",
    definition:
      "A specialist in removing forensic evidence from a crime scene.",
    type: "individuals",
  },
  {
    name: "Control Officer or Controller",
    definition: "A CASE OFFICER.",
    type: "individuals",
  },
  {
    name: "Customers",
    definition:
      "The customers of finished intelligence, usually policymakers and elected officials.",
    type: "individuals",
  },
  {
    name: "Cut-Out",
    definition:
      "A middle man somewhere between an intelligence agent and a case officer. There may be several cut-outs between agent and intelligence service.",
    type: "individuals",
  },
  {
    name: "Dangle",
    definition:
      "An agent set up to be recruited by another intelligence service as a double agent. Also a verb.",
    type: "individuals",
  },
  {
    name: "Deniable Person",
    definition:
      "An agent whose connection to the agency or organization can be plausibly denied.",
    type: "individuals",
  },
  {
    name: "Doorknockers",
    definition:
      "Background check and security personnel who go door to door asking a subject’s friends, neighbors, and relatives about the subject.",
    type: "individuals",
  },
  {
    name: "Dormant Operative",
    definition:
      "An operative with past ties to a terrorist organization but who is no longer active.",
    type: "individuals",
  },
  {
    name: "EBE",
    definition: "Extraterrestrial biological entity.",
    type: "individuals",
  },
  {
    name: "FEEBIE or FEEB",
    definition:
      "Epithet used by local law enforcement for the FBI. Highly derogatory.",
    type: "individuals",
  },
  {
    name: "Flaps-and-Seals Man",
    definition:
      "An expert at surreptitiously opening mail, parcels and pouches.",
    type: "individuals",
  },
  {
    name: "Floater",
    definition: "A STRINGER.",
    type: "individuals",
  },
  {
    name: "Friendly",
    definition:
      "A Delta Green term for someone who is not part of Delta Green and typically knows little about the group but assists with Delta Green operations.",
    type: "individuals",
  },
  {
    name: "Ghoul",
    definition:
      "An agent or officer who searches obituaries, graves, and death records for identities to be assumed in LEGENDS.",
    type: "individuals",
  },
  {
    name: "Handler",
    definition: "A CASE OFFICER.",
    type: "individuals",
  },
  {
    name: "Handling Agent",
    definition: "FBI agent who runs agents or informers.",
    type: "individuals",
  },
  {
    name: "Hip Pocket",
    definition:
      "An FBI informant who is unregistered and whose information is not used in court.",
    type: "individuals",
  },
  {
    name: "Illegals",
    definition: "Intelligence operatives with no diplomatic or official cover.",
    type: "individuals",
  },
  {
    name: "Investigator",
    definition:
      "A government agent trained to investigate crimes but who does not have any special powers of arrest; not usually trained in firearms and self-defense.",
    type: "individuals",
  },
  {
    name: "MIB",
    definition:
      "Conspiracy-theory slang for agents of secret government programs that deal with the extraterrestrial or the unnatural. MIB stands for Men in Black.",
    type: "individuals",
  },
  {
    name: "Mole",
    definition:
      "A term that may have been coined by spy novelist John LeCarré but was adopted by the intelligence services into their lexicons. A mole is an agent infiltrated into an enemy service.",
    type: "individuals",
  },
  {
    name: "Mule",
    definition: "A courier, often a drug courier.",
    type: "individuals",
  },
  {
    name: "Official",
    definition: "A senior member of an organization.",
    type: "individuals",
  },
  {
    name: "Operator",
    definition:
      "In counterterrorism, someone who wants to be a terrorist. Contrast with “special operator,” a special-operations soldier.",
    type: "individuals",
  },
  {
    name: "Outside Man",
    definition: "CIA jargon for an ILLEGAL.",
    type: "individuals",
  },
  {
    name: "Pavement Artist",
    definition:
      "A term coined by John LeCarré. It denotes a member of an urban surveillance team.",
    type: "individuals",
  },
  {
    name: "SAC",
    definition:
      "Special Agent in Charge; federal law enforcement officer in charge of a given office. Not to be confused with the Strategic Air Command of the military.",
    type: "individuals",
  },
  {
    name: "Sheep-Dipped",
    definition:
      "Refers to military personnel and equipment on loan to the CIA (or to law enforcement when posse comitatus is not a concern) and operating under that authority.",
    type: "individuals",
  },
  {
    name: "Sleeper",
    definition:
      "An agent who remains in the target country for years without performing intelligence-related activities before being activated, or “woken.”",
    type: "individuals",
  },
  {
    name: "Special Agent",
    definition:
      "An investigator who has arrest powers and has been trained in firearms and self-defense.",
    type: "individuals",
  },
  {
    name: "Spook",
    definition:
      "Slang for any intelligence officer, usable derogatorily or affectionately.",
    type: "individuals",
  },
  {
    name: "Station Chief",
    definition: "The top CIA officer in a foreign country.",
    type: "individuals",
  },
  {
    name: "Stringer",
    definition: "An occasional or freelance spy.",
    type: "individuals",
  },
  {
    name: "Suit",
    definition:
      "Any upper-level administrator away from the action. Often used derogatorily.",
    type: "individuals",
  },
  {
    name: "Tagged",
    definition: "Delta Green slang for someone with Delta Green clearance.",
    type: "individuals",
  },
  {
    name: "Turned",
    definition:
      "An intelligence agent who changes sides either voluntarily or under duress.",
    type: "individuals",
  },
  {
    name: "Walk-In",
    definition:
      "An intelligence agent who approaches an intelligence agency to offer his or services. Often highly suspect.",
    type: "individuals",
  },
  {
    name: "Watchers",
    definition: "Surveillance teams.",
    type: "individuals",
  },
  {
    name: "Zombie",
    definition:
      "An agent or operative who has “officially died” and assumed a new identity for the purposes of cover and deniability.",
    type: "individuals",
  },
  {
    name: "ARCHINT",
    definition:
      "Archeological intelligence. A term coined within Delta Green and not widely known.",
    type: "informationAndMisinformation",
  },
  {
    name: "Backstopping",
    definition:
      "An extremely in-depth cover. A whole new identity right down to the birth certificate.",
    type: "informationAndMisinformation",
  },
  {
    name: "Bigot List",
    definition:
      "A short list of those with access to intelligence from a given source or operation.",
    type: "informationAndMisinformation",
  },
  {
    name: "Biographic Leverage",
    definition: "CIA slang for blackmail material.",
    type: "informationAndMisinformation",
  },
  {
    name: "Black Propaganda",
    definition:
      "Propaganda purported to issue from a source other than its true source.",
    type: "informationAndMisinformation",
  },
  {
    name: "Blacker than Black",
    definition: "Delta Green slang for anything to do with Delta Green.",
    type: "informationAndMisinformation",
  },
  {
    name: "Blind Memoranda",
    definition:
      "Memoranda or orders sent without letterhead or file number. Such memoranda may be destroyed with impunity to preserve plausible deniability.",
    type: "informationAndMisinformation",
  },
  {
    name: "Blowback",
    definition:
      "When false propaganda circulated abroad is picked up by domestic news services as the truth.",
    type: "informationAndMisinformation",
  },
  {
    name: "Bona Fides",
    definition: "Proof of identity.",
    type: "informationAndMisinformation",
  },
  {
    name: "Chicken Feed",
    definition:
      "Disinformation mixed with reliable intelligence that is sent back by a TURNED agent to his or her superiors.",
    type: "informationAndMisinformation",
  },
  {
    name: "Classification",
    definition:
      "The systematic division of sensitive military, intelligence, or policy materials by the danger it poses if released: CONFIDENTIAL, SECRET, or TOP SECRET.",
    type: "informationAndMisinformation",
  },
  {
    name: "Clean",
    definition: "Unknown to hostile intelligence.",
    type: "informationAndMisinformation",
  },
  {
    name: "COMINT",
    definition:
      "Communications intelligence. Intelligence gathered from interception of communications.",
    type: "informationAndMisinformation",
  },
  {
    name: "COMSEC",
    definition: "Communications security.",
    type: "informationAndMisinformation",
  },
  {
    name: "Confidential",
    definition:
      "Information that would be dangerous if released to the public but would not threaten national security.",
    type: "informationAndMisinformation",
  },
  {
    name: "Domain Management",
    definition:
      "FBI software that maps U.S. communities along ethnic and religious lines.",
    type: "informationAndMisinformation",
  },
  {
    name: "Ears Only",
    definition:
      "Information so sensitive that it cannot be committed to paper.",
    type: "informationAndMisinformation",
  },
  {
    name: "ELINT",
    definition:
      "Electronic intelligence. Intelligence gathered through means such as radar, sonar, and orbital sensors.",
    type: "informationAndMisinformation",
  },
  {
    name: "Eyes Only",
    definition:
      "A restriction that specifies individuals or groups allowed to view classified information.",
    type: "informationAndMisinformation",
  },
  {
    name: "Eyewash",
    definition:
      "False information transmitted within an organization to conceal operations from double agents or intelligence leaks.",
    type: "informationAndMisinformation",
  },
  {
    name: "FININT",
    definition: "Financial Intelligence, gathered from monetary transactions.",
    type: "informationAndMisinformation",
  },
  {
    name: "Front",
    definition:
      "A legitimate cover organization run for the benefit of an intelligence or national-security agency; sometimes a PROPRIETARY COMPANY.",
    type: "informationAndMisinformation",
  },
  {
    name: "Grey Propaganda",
    definition: "Propaganda with no traceable source.",
    type: "informationAndMisinformation",
  },
  {
    name: "HUMINT",
    definition:
      "Human intelligence. Intelligence gathered from human sources such as agents.",
    type: "informationAndMisinformation",
  },
  {
    name: "IMINT",
    definition:
      "Imagery Intelligence. Collecting and analyzing visual intelligence, usually photographs gathered from satellites and airborne platforms.",
    type: "informationAndMisinformation",
  },
  {
    name: "Mainway",
    definition:
      "An NSA database of phone-call metadata used for traffic and social network analysis.",
    type: "informationAndMisinformation",
  },
  {
    name: "Marina",
    definition:
      "An NSA application that analyzes a subject’s Internet activity over the previous 365 days.",
    type: "informationAndMisinformation",
  },
  {
    name: "MASINT",
    definition: "",
    type: "informationAndMisinformation",
  },
  {
    name: "NarusInsight",
    definition:
      "Supercomputer system used by the FBI to collect information from digital communications.",
    type: "informationAndMisinformation",
  },
  {
    name: "OPINT",
    definition:
      "Operational intelligence; intelligence used to conduct a field operation.",
    type: "informationAndMisinformation",
  },
  {
    name: "OSINT",
    definition:
      "Open Source Intelligence; intelligence-gathering that does not require classified sources or methods. Open sources can include published papers, press releases, news stories and social media.",
    type: "informationAndMisinformation",
  },
  {
    name: "Pattern",
    definition:
      "The behavior and daily routines unique to an individual or an organization.",
    type: "informationAndMisinformation",
  },
  {
    name: "Pinwale",
    definition:
      "An NSA system for collecting and searching digital communications, including email.",
    type: "informationAndMisinformation",
  },
  {
    name: "Plaintext",
    definition: "An unencrypted message.",
    type: "informationAndMisinformation",
  },
  {
    name: "Prism",
    definition:
      "An NSA system for collecting Internet communications from major U.S. providers.",
    type: "informationAndMisinformation",
  },
  {
    name: "Product",
    definition: "Finished intelligence reports.",
    type: "informationAndMisinformation",
  },
  {
    name: "Secret",
    definition:
      "Information that is classified because it has significant national security value.",
    type: "informationAndMisinformation",
  },
  {
    name: "Sensitive Compartmentalized Information (SCI)",
    definition:
      "Classified information that is especially restricted, usually because it demonstrates the accuracy of a secret collection technique such as a spy satellite.",
    type: "informationAndMisinformation",
  },
  {
    name: "SIGINT",
    definition:
      "Signals intelligence. Intelligence gathered through signals and coded-communications interception.",
    type: "informationAndMisinformation",
  },
  {
    name: "Social Network Analysis",
    definition:
      "Analysis of social structures and the ways individuals and groups interact.",
    type: "informationAndMisinformation",
  },
  {
    name: "Special Access Program",
    definition:
      "A method of further restricting classified information by limiting access to specifically authorized individuals.",
    type: "informationAndMisinformation",
  },
  {
    name: "Steganography",
    definition:
      "Concealing a message in a visual medium such as dots or patterns in an image.",
    type: "informationAndMisinformation",
  },
  {
    name: "Tear Line",
    definition:
      "Slang for classified information that is approved to be shared with those lacking clearance.",
    type: "informationAndMisinformation",
  },
  {
    name: "Top Secret",
    definition:
      "Classified information that must be handled with extreme care because releasing it would gravely harm national security.",
    type: "informationAndMisinformation",
  },
  {
    name: "Traffic Analysis",
    definition:
      "Gaining intelligence from the volume and patterns of intercepted messages rather than their contents.",
    type: "informationAndMisinformation",
  },
  {
    name: "Trafficthief",
    definition:
      "An NSA database of metadata associated with names, phone numbers, email addresses, and other identifying information.",
    type: "informationAndMisinformation",
  },
  {
    name: "The Unnatural",
    definition:
      "Genuinely supernatural or alien forces, technology, or entities. Usually inimical to human life and sanity.",
    type: "informationAndMisinformation",
  },
  {
    name: "XKeyscore",
    definition:
      "An NSA computer system for searching and analyzing global Internet data.",
    type: "informationAndMisinformation",
  },
  {
    name: "Black Site",
    definition:
      "An unacknowledged facility where a black project is conducted, such as a secret prison.",
    type: "locations",
  },
  {
    name: "Camp Swampy",
    definition: "Another name for THE FARM.",
    type: "locations",
  },
  {
    name: "The Farm",
    definition:
      "CIA term for its secret training facility at Camp Peary, Virginia.",
    type: "locations",
  },
  {
    name: "Green Box",
    definition:
      "A secret location in which a Delta Green team deposits equipment for future operations or by other teams that know of it.",
    type: "locations",
  },
  {
    name: "Grinder",
    definition: "CIA briefing room for interrogating defectors.",
    type: "locations",
  },
  {
    name: "Hangar 18",
    definition:
      "Delta Green slang for Wright-Patterson Air Force Base, home of the National Air and Space Intelligence Center and rumored site of the Roswell crash debris.",
    type: "locations",
  },
  {
    name: "Hot Suite",
    definition: "A BIOSAFETY LEVEL 4 laboratory and containment facility.",
    type: "locations",
  },
  {
    name: "The Ice Cave",
    definition:
      "Among Delta Green operatives, a rumored xenobiology facility located on the DOE’s Los Alamos reserve in Nevada.",
    type: "locations",
  },
  {
    name: "The Institute",
    definition:
      "Slang for the USAMRIID, the United States Army’s Medical Research Institute for Infectious Diseases.",
    type: "locations",
  },
  {
    name: "LZ",
    definition:
      "Landing Zone. Area where a helicopter or VTOL can land and take off.",
    type: "locations",
  },
  {
    name: "Safe House",
    definition:
      "A hideaway where agents or defectors may be safely accommodated. Often refers to a place where agents or defectors can be debriefed.",
    type: "locations",
  },
  {
    name: "Slammer",
    definition: "The BIOSAFETY LEVEL 4 HOT SUITE at USAMRIID.",
    type: "locations",
  },
  {
    name: "The Submarine",
    definition: "The BIOSAFETY LEVEL 4 morgue at USAMRIID.",
    type: "locations",
  },
  {
    name: "The Tank",
    definition:
      "CIA and FBI jargon for a room built to be secure against surveillance.",
    type: "locations",
  },
  {
    name: "1001",
    definition:
      "Refers to the federal law that prohibits lying to federal agents (Title 18, Section 1001). Often can be enforced even when no other crime can be proven.",
    type: "miscellaneous",
  },
  {
    name: "Angel",
    definition: "A radar signal from the weather or unknown causes.",
    type: "miscellaneous",
  },
  {
    name: "Angel Hair",
    definition:
      "Filaments sometimes found after a UFO sighting; often suspected to be the webs of migrating spiders.",
    type: "miscellaneous",
  },
  {
    name: "Asset",
    definition:
      "Any person, group, instrument, installation, supply or resource at the disposal of an organization.",
    type: "miscellaneous",
  },
  {
    name: "BLUE BOOK",
    definition:
      "Third codename for the U.S. Air Force UFO investigation project (1953 to 1969).",
    type: "miscellaneous",
  },
  {
    name: "Burn, Burning",
    definition:
      "Slang for an explosive chain of lethal transmissions, wherein a lethal infectious agent spreads explosively through a population.",
    type: "miscellaneous",
  },
  {
    name: "Cattle Mutilation",
    definition:
      "Typically associated with UFO sightings, Satanists, or insurance fraud.",
    type: "miscellaneous",
  },
  {
    name: "Collateral Damage",
    definition:
      "Civilian casualties and property damage caused by a strike against a military objective.",
    type: "miscellaneous",
  },
  {
    name: "Disposable",
    definition:
      "Something or someone able to be sacrificed, if necessary, for the success of a mission.",
    type: "miscellaneous",
  },
  {
    name: "Flap",
    definition:
      "Military slang for startled confusion, such as is caused by surprise inspections.",
    type: "miscellaneous",
  },
  {
    name: "Foreign Intelligence Survellance Act (FISA)",
    definition:
      "A law that allows federal agencies to monitor suspected terrorists or spies without showing probable cause.",
    type: "miscellaneous",
  },
  {
    name: "The Game",
    definition:
      "To be “In the Game” is to be involved in an exclusive, secretive field—usually intelligence work or drug trafficking.",
    type: "miscellaneous",
  },
  {
    name: "GRUDGE",
    definition:
      "Second codename for the U.S. Air Force UFO investigation project (1949 to 1953).",
    type: "miscellaneous",
  },
  {
    name: "Hooah",
    definition:
      "The Army’s battle cry and signal of assent. Some say it comes from the abbreviation H.U.A., from “Heard, Understood, Acknowledged.”",
    type: "miscellaneous",
  },
  {
    name: "Hoorah",
    definition:
      "A battle cry and signal of assent sometimes used by Navy personnel who serve closely with Marines.",
    type: "miscellaneous",
  },
  {
    name: "Hooyah",
    definition: "The Navy’s battle cry and signal of assent.",
    type: "miscellaneous",
  },
  {
    name: "Hot",
    definition: "Lethally infectious, in a biological sense.",
    type: "miscellaneous",
  },
  {
    name: "Hot Agent",
    definition: "An extremely lethal virus.",
    type: "miscellaneous",
  },
  {
    name: "Hot Zone",
    definition: "The area of a lethal infectious outbreak.",
    type: "miscellaneous",
  },
  {
    name: "Material Support",
    definition:
      "Money, lodging, training, documents, weapons, or personnel provided to a terrorist organization. Prosecutable even if the organization itself is fictional.",
    type: "miscellaneous",
  },
  {
    name: "M.I.C.E.",
    definition:
      "CIA code for the four reasons people spy: Money, Ideology, Compromise, and Ego.",
    type: "miscellaneous",
  },
  {
    name: "Millenarian",
    definition:
      "Apocalyptic; foreshadowing or foreboding imminent and widespread destruction.",
    type: "miscellaneous",
  },
  {
    name: "Mogul",
    definition:
      "A project that used clusters of balloons with microphones to spy on Soviet nuclear tests. Its activities were behind the 1947 Roswell Incident. There was no disk. Do not ask.",
    type: "miscellaneous",
  },
  {
    name: "Oorah",
    definition: "The Marine Corps’ battle cry and assent signal.",
    type: "miscellaneous",
  },
  {
    name: "Operational Climate",
    definition:
      "Describes the difficulty of carrying out intelligence operations in a locale, either due to local attitudes or strict policing.",
    type: "miscellaneous",
  },
  {
    name: "OPTempo",
    definition:
      "Operational tempo, the frequency with which a military unit is deployed. High OPTEMPO tends to reduce morale and disrupt effectiveness.",
    type: "miscellaneous",
  },
  {
    name: "Oversight",
    definition:
      "Political monitoring of COVERT operations by elected officials.",
    type: "miscellaneous",
  },
  {
    name: "Plausable Deniability",
    definition:
      "Being able to claim that you didn’t know about the operation, or were “out of the loop.” Very important for bureaucrats and politicians.",
    type: "miscellaneous",
  },
  {
    name: "Prosaic Explanation",
    definition:
      "A common, mundane, ordinary cause for a UFO sighting or alien encounter.",
    type: "miscellaneous",
  },
  {
    name: "PTSD",
    definition:
      "Post-traumatic stress disorder, a wide range of lingering symptoms of exposure to trauma. Common among combat veterans, victims of violence, and disaster survivors.",
    type: "miscellaneous",
  },
  {
    name: "SIGN",
    definition:
      "First codename for the U.S. Air Force UFO investigation project (1947 to 1949).",
    type: "miscellaneous",
  },
  {
    name: "Stepped On",
    definition:
      "Radio and signal interference; as in “The signal was stepped on.” Also used in the drug trade to refer to deliberate dilution of a product.",
    type: "miscellaneous",
  },
  {
    name: "Tasked",
    definition: "Ordered.",
    type: "miscellaneous",
  },
  {
    name: "Tradecraft",
    definition:
      "The techniques of espionage. Obscuring and covering up your actions to reduce suspicion.",
    type: "miscellaneous",
  },
  {
    name: "Walk-In",
    definition:
      "In UFO lore, an extraterrestrial spirit that has taken over the body of a human.",
    type: "miscellaneous",
  },
  {
    name: "Aymmetrical Warfare",
    definition:
      "Battle between forces whose relative strength is highly disproportionate. Most conventional military actions against terrorists are asymmetrical.",
    type: "operations",
  },
  {
    name: "Bang and Burn",
    definition: "A demolition-and-sabotage operation.",
    type: "operations",
  },
  {
    name: "Bioterrorism",
    definition: "Terrorism using a BIOLOGICAL AGENT or the threat of one.",
    type: "operations",
  },
  {
    name: "Black Bag Job",
    definition:
      "FBI jargon for operations involving illegal burglary or breaking and entering, either to perform a search or to install eavesdropping equipment.",
    type: "operations",
  },
  {
    name: "Black Bag Operation",
    definition: "CIA jargon for bribery.",
    type: "operations",
  },
  {
    name: "Black Operations",
    definition:
      "An operation that is completely “off the books,” either highly secret, illegal, or outside an agency’s official charter.",
    type: "operations",
  },
  {
    name: "Blowback",
    definition: "Any unintended (negative) consequences of an operation.",
    type: "operations",
  },
  {
    name: "Bureau Special",
    definition:
      "An FBI investigation carried on outside the framework of usual Bureau procedure with no files or records being maintained. Generally involves illegal or politically sensitive affairs.",
    type: "operations",
  },
  {
    name: "Buy-Bust Operation",
    definition:
      "Law enforcement operation designed to lure a drug dealer to a single purchase and arrest of the dealer immediately afterwards.",
    type: "operations",
  },
  {
    name: "Case Death",
    definition:
      "An operation that fails for no discernable reason. Usually provokes suspicion of a security leak.",
    type: "operations",
  },
  {
    name: "Clandestine",
    definition:
      "An operation that should go completely unseen, such as putting a rubber raft full of agents ashore in the dead of night.",
    type: "operations",
  },
  {
    name: "Counterterrorism",
    definition: "Pre-emptive or retaliatory measures to fight terrorism.",
    type: "operations",
  },
  {
    name: "Covert",
    definition:
      "An operation that may be seen but should not be noticed, such as an agent entering a country through customs with false identification and a cover story.",
    type: "operations",
  },
  {
    name: "Covert Action",
    definition:
      "CIA jargon for attempting to secretly influence the affairs of another country.",
    type: "operations",
  },
  {
    name: "A Day at the Races",
    definition:
      "Delta Green slang for an operation used to train or evaluate a candidate.",
    type: "operations",
  },
  {
    name: "Destabilization",
    definition:
      "Creating chaos in a country for the purpose of replacing its government or paralyzing its foreign policy.",
    type: "operations",
  },
  {
    name: "Dirty Tricks",
    definition: "CIA jargon for BLACK OPERATIONS and COVERT ACTION.",
    type: "operations",
  },
  {
    name: "Drain the Swamp",
    definition:
      "Slang for changing an environment to make it more difficult for a terrorist network to operate.",
    type: "operations",
  },
  {
    name: "Executive Action",
    definition: "CIA euphemism for overthrowing a leader of a foreign country.",
    type: "operations",
  },
  {
    name: "False Flag",
    definition:
      "An operation designed to appear as though it is being carried out by someone other than those who actually planned and executed it.",
    type: "operations",
  },
  {
    name: "Joint Terrorism Task Force (JTTF)",
    definition:
      "A partnership between federal and local law enforcement agencies.",
    type: "operations",
  },
  {
    name: "Mowing the Grass",
    definition:
      "Undertaking difficult operations again and again with superficial results but no lasting effect. Often used in reference to counterinsurgency operations and drug enforcement.",
    type: "operations",
  },
  {
    name: "Narco-Terrorism",
    definition:
      "Terrorism financed by drug trafficking or meant to further the aims of drug traffickers.",
    type: "operations",
  },
  {
    name: "A Night at the Opera",
    definition:
      "Delta Green slang for a DG operation. Supplanted the term Psychotic Opera.",
    type: "operations",
  },
  {
    name: "Overt",
    definition:
      "An operation where no attempt is made to conceal the operation or the identities of those involved.",
    type: "operations",
  },
  {
    name: "Psychotic Opera",
    definition:
      "An old Delta Green slang term for a psychological warfare operation used as cover for a Delta Green operation. Supplanted by A NIGHT AT THE OPERA.",
    type: "operations",
  },
  {
    name: "Special Projects",
    definition:
      "CIA jargon for the tougher side of intelligence operations such as counterinsurgency warfare and paramilitary operations.",
    type: "operations",
  },
  {
    name: "Surgical Strike",
    definition:
      "A military operation with a limited objective, meant to be performed with precision and swiftness and to leave a limited footprint.",
    type: "operations",
  },
  {
    name: "Symmetrical Warfare",
    definition: "Battle between equivalent forces.",
    type: "operations",
  },
  {
    name: "TDY",
    definition:
      "Temporary duty assignment, a brief (usually no more than two months) military deployment of an individual or team away from their unit. Sometimes written “TDA.”",
    type: "operations",
  },
  {
    name: "The Aquarium",
    definition:
      "Insider slang for the GRU, or Main Intelligence Directorate, Russia’s senior military intelligence agency.",
    type: "organizations",
  },
  {
    name: "Alphabet Soup",
    definition:
      "A reference to the many U.S. agencies known by their acronyms rather than full names (i.e., CIA, FBI, DEA, etc.)",
    type: "organizations",
  },
  {
    name: "Cell",
    definition:
      "A small group of a larger organization that is separated for security. Terrorist organizations and resistance groups are often organized into cells.",
    type: "organizations",
  },
  {
    name: "The Company",
    definition: "Insider jargon for the CIA.",
    type: "organizations",
  },
  {
    name: "Cousins",
    definition:
      "British intelligence slang for the CIA, sometimes meant derogatorily.",
    type: "organizations",
  },
  {
    name: "Echelon",
    definition:
      "A global system for communication surveillance run by the Five Eyes",
    type: "organizations",
  },
  {
    name: "The Firm",
    definition:
      "British slang for MI-6, the British Secret Intelligence Service.",
    type: "organizations",
  },
  {
    name: "Five Eyes (FVEY)",
    definition:
      "An intelligence alliance between the U.S., U.K., Canada, New Zealand, and Australia.",
    type: "organizations",
  },
  {
    name: "Notional",
    definition:
      "A CIA-owned company that exists only on paper. For the FBI, a notional is a counterfeit subversive organization set up to draw members away from real subversive organizations.",
    type: "organizations",
  },
  {
    name: "Proprietary Company",
    definition:
      "A company owned and operated by an intelligence agency for the support of that agency’s operations. Air America was a CIA proprietary company.",
    type: "organizations",
  },
  {
    name: "Puzzle Palace",
    definition:
      "Slang for the NSA. NSA is often said to stand for “No Such Agency” or “Never Say Anything,” due to its extremely secret nature.",
    type: "organizations",
  },
  {
    name: "Siblings",
    definition: "CIA slang for the Defense Intelligence Agency.",
    type: "organizations",
  },
  {
    name: "Anti-Terrorism",
    definition:
      "Preventative measures to reduce vulnerability to terrorist attacks.",
    type: "procedures",
  },
  {
    name: "Assessment",
    definition:
      "A 72-hour window when federal agents may legally conduct an investigation or surveillance without having a PREDICATE.",
    type: "procedures",
  },
  {
    name: "Biosafety Level",
    definition:
      "The extent of biocontainment precautions required to isolate biological agents in a laboratory. The lowest, level 1, requires little more than hand washing and thorough cleaning. The highest, level 4, requires the use of CHEMTURION SPACE SUITS, multiple showers, a vacuum room, an ultraviolet light room, multiple airlocks, decontamination of all water and air coming into and going out of the laboratory, and other precautions.",
    type: "procedures",
  },
  {
    name: "Blind Date",
    definition:
      "Meeting someone at their choice of time and place, with the accompanying risks of a set-up.",
    type: "procedures",
  },
  {
    name: "Blown",
    definition: "To be exposed as an undercover agent.",
    type: "procedures",
  },
  {
    name: "Brush Pass",
    definition:
      "A brief encounter between agent and officer in order to pass an item along.",
    type: "procedures",
  },
  {
    name: "Burned",
    definition:
      "To be revealed or exposed as an undercover agent. Also a euphemism for being compromised by blackmail.",
    type: "procedures",
  },
  {
    name: "Cauterization",
    definition:
      "Removing a compromised agent to safety, or dismantling or disposing of a compromised ASSET.",
    type: "procedures",
  },
  {
    name: "Clean-up",
    definition: "Removing or obscuring evidence at a crime scene.",
    type: "procedures",
  },
  {
    name: "Close a Contract",
    definition: "To kill or assassinate.",
    type: "procedures",
  },
  {
    name: "Cold Approach",
    definition:
      "Attempting to recruit an agent without any prior indication that the target would want to work as a spy. Highly risky and seldom done.",
    type: "procedures",
  },
  {
    name: "Compartmentalization",
    definition:
      "Limiting access to materials based on not only the material’s security classification but also the person reading the material’s need to know.",
    type: "procedures",
  },
  {
    name: "Cover",
    definition:
      "A false identity for an agent or official pretext for an operation, meant to justify actions and provide PLAUSIBLE DENIABILITY.",
    type: "procedures",
  },
  {
    name: "Dead Drop",
    definition:
      "A concealed or inconspicuous location where information can be left for retrieval by another operative.",
    type: "procedures",
  },
  {
    name: "Decon",
    definition:
      "Slang for “decontaminate,” in reference to infectious diseases or chemical weapons.",
    type: "procedures",
  },
  {
    name: "DIOG",
    definition:
      "The FBI’s Domestic Investigations and Operations Guide, which governs undercover operations, the use of informants, and steps that may be taken without a formal investigation to gain information that may be used to pressure someone into becoming an informant.",
    type: "procedures",
  },
  {
    name: "Dry Cleaning",
    definition: "Losing a tail or surveillance team.",
    type: "procedures",
  },
  {
    name: "Exfiltration",
    definition: "CLANDESTINE or COVERT removal of personnel from an area.",
    type: "procedures",
  },
  {
    name: "Extraction",
    definition: "Evacuate personnel from an area.",
    type: "procedures",
  },
  {
    name: "Extraordinary Rendition",
    definition:
      "Government-sponsored abduction and extrajudicial transfer of a person from one country to another, whether for prosecution or for interrogation in a location that allows methods that would be illegal elsewhere.",
    type: "procedures",
  },
  {
    name: "Ferret Searches",
    definition: "Surprise CIA internal security inspection.",
    type: "procedures",
  },
  {
    name: "FISA Court",
    definition:
      "Federal court established by the U.S. Foreign Intelligence Surveillance Act to secretly review surveillance warrant requests by the NSA and FBI.",
    type: "procedures",
  },
  {
    name: "Fix",
    definition: "CIA jargon for compromise, blackmail, or misdirection.",
    type: "procedures",
  },
  {
    name: "Fluttered",
    definition: "To be examined by a polygraph machine.",
    type: "procedures",
  },
  {
    name: "Fumigating",
    definition: "Checking an area for surveillance devices.",
    type: "procedures",
  },
  {
    name: "Go to Ground",
    definition: "Go into hiding.",
    type: "procedures",
  },
  {
    name: "Honey Trap",
    definition:
      "Using sex to lure an agent into a compromising position and open him or her to blackmail.",
    type: "procedures",
  },
  {
    name: "Isolation",
    definition:
      "CIA code for attending the training facility known as THE FARM.",
    type: "procedures",
  },
  {
    name: "Legend",
    definition: "A fake biography to give a spy COVER.",
    type: "procedures",
  },
  {
    name: "Make",
    definition: "To recognize someone.",
    type: "procedures",
  },
  {
    name: "Making a Pass",
    definition:
      "Physically passing a message to or from a courier or agent, typically using a BRUSH PASS or a DEAD DROP.",
    type: "procedures",
  },
  {
    name: "Measles",
    definition:
      "To “die from measles” is to have been assassinated by means that make the death appear natural.",
    type: "procedures",
  },
  {
    name: "Moonlight Extradition",
    definition: "An EXTRAORDINARY RENDITION.",
    type: "procedures",
  },
  {
    name: "Naked",
    definition: "An intelligence operative working without cover or backup.",
    type: "procedures",
  },
  {
    name: "Neutralize",
    definition:
      "To kill or assassinate. For the FBI, to “neutralize” means to damage the target’s political credibility.",
    type: "procedures",
  },
  {
    name: "Nuke",
    definition:
      "Biocontainment euphemism for attempting to render a HOT ZONE sterile.",
    type: "procedures",
  },
  {
    name: "OPSEC",
    definition:
      "Operational security. Steps taken to ensure the operation’s secrecy and success.",
    type: "procedures",
  },
  {
    name: "Playback",
    definition:
      "To have a captured agent report disinformation back to his or her superiors as if he or she were still operating normally.",
    type: "procedures",
  },
  {
    name: "Plumbing",
    definition:
      "Work undertaken to prepare for a major operation, usually involving reconnaissance. This work is carried out by “plumbers.”",
    type: "procedures",
  },
  {
    name: "Predicate",
    definition:
      "Information that clearly suggests an individual has violated federal law and therefore may be investigated by federal agents.",
    type: "procedures",
  },
  {
    name: "Quarantine",
    definition:
      "Isolation of an individual, group, or (rarely) area due to a communicable health risk.",
    type: "procedures",
  },
  {
    name: "Radiological Operation",
    definition:
      "Using radioactive materials to cause casualties or restrict the use of terrain.",
    type: "procedures",
  },
  {
    name: "Rolled Up",
    definition:
      "When an operation goes bad and an agent, or even an entire network, is arrested.",
    type: "procedures",
  },
  {
    name: "Sanction",
    definition: "To kill or assassinate.",
    type: "procedures",
  },
  {
    name: "Sanitize",
    definition:
      "To remove all evidence of an agency’s involvement in an operation. Often refers to the use of stolen cars, false I.D., and untraceable equipment.",
    type: "procedures",
  },
  {
    name: "Snitch Jacketing",
    definition:
      "FBI technique for making a member of a subversive or organized-crime group appear to be an informer. The result is that the target must come to the FBI and become an informer or witness in order to gain government protection from his or her now-suspicious",
    type: "procedures",
  },
  {
    name: "Sterilization",
    definition:
      "Unequivocal, total destruction of all HOT AGENTS in a HOT ZONE. Extremely difficult to achieve in practice and almost impossible to verify afterwards.",
    type: "procedures",
  },
  {
    name: "Toss",
    definition: "To surreptitiously enter and search a target’s domicile.",
    type: "procedures",
  },
  {
    name: "Wetwork",
    definition:
      "Assassination. Originally from a Russian euphemism: “to wet the ground” (e.g., with blood).",
    type: "procedures",
  },
  {
    name: "Window Dressing",
    definition:
      "Ancillary details to make a legend or an operation’s cover more convincing.",
    type: "procedures",
  },
];
