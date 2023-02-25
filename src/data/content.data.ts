export type ContentPageType = {
	title: string;
	description: string;
};

export type ContentType = {
	pageOne: ContentPageType;
	pageTwo: ContentPageType;
	pageThree: ContentPageType;
};

export const CONTENT_DATA: ContentType[] = [
	/* 0 - great wall of china */
  	{
    	pageOne: {
      	title: "The Great Wall of China",
      	description:
       		 "The Great Wall of China is one of the most iconic landmarks in the world. It is a massive wall that stretches over 13,000 miles across the northern part of China. The wall was constructed over a period of many centuries, with various dynasties adding to it and modifying it. Today, it is one of the most popular tourist attractions in China, drawing millions of visitors from all over the world each year.",
    	},
    	pageTwo: {
      	title: "History",
      	description:
        	"The Great Wall of China was built over 2,000 years ago during the Warring States period to protect Chinese territories from invasions. The various walls were connected during the Qin dynasty to form a single, continuous wall to protect China from northern nomads. The wall was constructed using different materials and was modified and extended over the centuries by various dynasties, particularly by the Ming dynasty, who repaired and reinforced sections, and built new sections. The wall served not only for defense but also for border control and trade regulation.",
    	},
    	pageThree: {
      		title: "Features",
      		description:
        	"The Great Wall of China is an impressive engineering feat made of stone, brick, tamped earth, and wood. It is 15-30 feet wide and up to 26 feet tall, with the most famous sections built during the Ming dynasty using brick and stone. The wall has watchtowers, battlements, crenellations, and gates used for defense and access control.",
    	},
  	},

  /* 1 - Chichén Itzá */
  {
    pageOne: {
      title: "Chichén Itzá",
      description:
        "Chichen Itza is a world-famous archaeological site located in the Yucatan Peninsula of Mexico. It was once a major pre-Columbian city and a hub of Mayan civilization. Today, it is one of the most visited archaeological sites in Mexico, attracting millions of visitors each year.",
    },
    pageTwo: {
      title: "History",
      description:
        "Chichen Itza, founded by the Maya in the late 6th century, was ruled by powerful kings and grew to become one of the largest cities in the Maya world. It was invaded by the Toltecs in the 10th century, leading to a period of cultural exchange and innovation. After the decline of the Maya civilization in the 13th century, Chichen Itza was abandoned but rediscovered by Spanish explorers in the 16th century and has since become a popular tourist destination.",
    },
    pageThree: {
      title: "Features",
      description:
        'Chichen Itza boasts many impressive structures, including the famous 98-foot El Castillo pyramid with its four staircases containing 91 steps each, totaling 365 steps. The Ball Court is the largest and most well-preserved in Mesoamerica, measuring 545 feet by 225 feet and was used for the ancient game "pok-ta-pok". The Temple of the Warriors is a large stepped pyramid with a platform surrounded by hundreds of warrior columns and carvings.',
    },
  },

  /* 2 - PETRA */
  {
    pageOne: {
      title: "Petra",
      description:
        "Petra is an ancient city located in modern-day Jordan, and it is one of the most fascinating and impressive archaeological sites in the world. Petra is an iconic destination and attracts millions of visitors every year. The city is known for its magnificent rock-cut architecture, temples, tombs, and other historical landmarks, which have been carved into the sandstone cliffs.",
    },
    pageTwo: {
      title: "History",
      description:
        "Petra was founded in the 4th century BC by nomadic Arabs and became a thriving center of commerce and culture at the crossroads of trade routes. Skilled Nabataean builders carved elaborate structures into sandstone cliffs, including temples and tombs. Petra came under Roman rule in the 1st century AD and continued to prosper. However, by the 4th century AD, it declined and was abandoned until rediscovered in 1812 by Swiss explorer Johann Ludwig Burckhardt. Today, Petra is a renowned archaeological site.",
    },
    pageThree: {
      title: "Features",
      description:
        "Petra boasts impressive rock-cut architecture, highlighted by the famous Treasury (Al Khazneh) temple from the 1st century BC. Accessed through the narrow Siq canyon, the Treasury is carved out of red sandstone cliffs. Other significant landmarks include the Monastery, a large cliff-top temple, and the Great Temple, Petra's largest building. The Royal Tombs are also noteworthy, serving as the burial site for Nabataean royalty.",
    },
  },

  /* 3 - MACHU PICCHU */
  {
    pageOne: {
      title: "Machu Picchu",
      description:
        "Machu Picchu is an ancient Incan city located in the Andes Mountains of Peru. It is one of the most famous archaeological sites in the world and attracts millions of visitors every year. The city was built in the 15th century and is known for its impressive architecture, stunning views, and rich history.",
    },
    pageTwo: {
      title: "History",
      description:
        'Machu Picchu was built in the mid-15th century as a royal estate for Incan emperor Pachacuti. Abandoned in the late 16th century, it was rediscovered by archaeologist Hiram Bingham in 1911 and dubbed the "Lost City of The Incas."',
    },
    pageThree: {
      title: "Features",
      description:
        "Machu Picchu impresses with stunning mountain views and traditional Incan architecture, utilizing dry stone walls and polished surfaces. Divided into agricultural and urban sectors, the latter features royal palaces, temples, and residences. The Intihuatana stone, an astronomical calendar, is the city's most notable landmark, aligned with the sun's solstice movements.",
    },
  },

  /* 4 - CHRIST THE REDEEMER */
  {
    pageOne: {
      title: "Christ The Redeemer",
      description:
        "Christ the Redeemer is a statue of Jesus Christ located in Rio de Janeiro, Brazil. It is one of the most famous landmarks in the world and is considered to be an icon of both Rio de Janeiro and Brazil as a whole. The statue is located on top of Corcovado Mountain, which overlooks the city of Rio de Janeiro.",
    },
    pageTwo: {
      title: "History",
      description:
        "Proposed in the 1850s by Brazilian priest Pedro Maria Boss, the idea for the Christ the Redeemer statue was revived in the 1920s by Brazilian Catholics to mark their country's independence centennial. Constructed by Brazilian workers under French sculptor Paul Landowski's design, the statue opened in 1931, taking nine years to complete.",
    },
    pageThree: {
      title: "Features",
      description:
        "Christ the Redeemer statue is made of reinforced concrete and soapstone, stands at 98 feet tall, and weighs 635 metric tons. Depicting Jesus with outstretched arms, it symbolizes peace and forgiveness and sits atop a 26-foot pedestal. The statue attracts millions of visitors annually.",
    },
  },

  /* 5 - THE COLOSSEUM */
  {
    pageOne: {
      title: "The Colosseum",
      description:
        "The Colosseum, also known as the Flavian Amphitheatre, is an iconic landmark located in the heart of Rome, Italy. It is one of the most famous ancient buildings in the world and is considered to be a masterpiece of Roman engineering and architecture.",
    },
    pageTwo: {
      title: "History",
      description:
        "The Colosseum, built in 70 AD under Emperor Vespasian and completed in 80 AD by his successor Titus, served as a venue for various forms of entertainment. It hosted gladiatorial contests, animal hunts, mock sea battles, and public executions. The Colosseum has undergone significant changes throughout its history. It was used as a fortress in the 5th century and a quarry for building materials in the 12th century. The 18th century saw a major restoration effort, including the removal of debris and plant growth.",
    },
    pageThree: {
      title: "Features",
      description:
        "The Colosseum is a massive elliptical structure made of concrete and stone, measuring 189m long, 156m wide, and 48m tall. It seated up to 50,000 spectators and featured advanced engineering techniques, such as barrel vaults and arches, to support its massive weight and provide an open interior space. Its exterior boasts four stories of arcades adorned with columns and statuary.",
    },
  },

  /* 6 - The Taj Mahal */
  {
    pageOne: {
      title: "The Taj Mahal",
      description:
        'Taj Mahal is one of the most famous monuments in the world and is located in the northern Indian city of Agra. It is a UNESCO World Heritage Site and is considered to be one of the greatest examples of Mughal architecture in India. The Taj Mahal is also known as the "Crown of Palaces" and is a symbol of love, beauty, and symmetry.',
    },
    pageTwo: {
      title: "History",
      description:
        "The Taj Mahal, a mausoleum in Agra, India, was commissioned by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal, who died in 1631. The construction began in 1632 and took over 20 years with 20,000 workers. The monument was designed by Ustad Ahmad Lahauri and blends Islamic, Indian, and Persian styles. It's believed to have cost over 32 million rupees, equivalent to over $1 billion USD today.",
    },
    pageThree: {
      title: "Features",
      description:
        "The Taj Mahal is a white marble mausoleum with four minarets and a surrounding garden. The entrance is a red sandstone gateway with intricate calligraphy and marble inlay work. The tomb chamber contains the cenotaphs of Shah Jahan and Mumtaz Mahal, enclosed by a marble screen with precious stones. The monument is famous for its symmetrical design, with perfectly aligned minarets and identical decoration on each side.",
    },
  },
];
