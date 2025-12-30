// Types
export interface Player {
  id: string;
  gameName: string;
  realName: string;
  role: string;
  picture: string;
  nationality: string;
  nationalityCode: string;
  joinedYear: number;
  birthYear: number;
  active: boolean;
  substitute?: boolean;
}

export interface Champion {
  champion: string;
  games: number;
  wins: number;
  losses: number;
  winRate: number;
  kda: number;
}

export interface PlayerStats {
  gamesPlayed: number;
  overallStats: {
    kda: number;
    winRate: number;
    kills: number;
    deaths: number;
    assists: number;
  };
  topChampions?: Champion[];
  achievements: string[];
}

export interface Achievement {
  tournament: string;
  placement: string;
  prize?: string;
}

export interface Sponsor {
  name: string;
  category: string;
  since: number;
  type: string;
  active: boolean;
}

export interface Coach {
  name: string;
  realName: string;
  role: string;
  joinedYear: number;
  birthYear: number;
  picture:string
}

// Team Info
export const team = {
  name: "T1",
  fullName: "T1 Entertainment & Sports",
  region: "LCK",
  founded: 2004,
  owner: "SK Telecom & Comcast Spectacor",
  worldChampionships: 6,
  worldTitles: [2013, 2015, 2016, 2023, 2024, 2025],
  lckTitles: 11
};

// Rosters
export const rosters: Record<number, Player[]> = {
  2025: [
    {
      id: "faker",
      gameName: "Faker",
      realName: "Lee Sang-hyeok",
      role: "Mid",
      nationality: "South Korea",
      picture: "/assets/images/Faker.png",
      nationalityCode: "KR",
      joinedYear: 2013,
      birthYear: 1996,
      active: true
    },
    {
      id: "doran",
      gameName: "Doran",
      realName: "Choi Hyeon-joon",
      role: "Top",
      nationality: "South Korea",
      picture: "/assets/images/Doran.webp",
      nationalityCode: "KR",
      joinedYear: 2025,
      birthYear: 2000,
      active: true
    },
    {
      id: "oner",
      gameName: "Oner",
      realName: "Moon Hyeon-joon",
      role: "Jungle",
      nationality: "South Korea",
      picture: "/assets/images/Oner.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    },
    {
      id: "gumayusi",
      gameName: "Gumayusi",
      realName: "Lee Min-hyeong",
      role: "ADC",
      nationality: "South Korea",
      picture: "/assets/images/Gumayusi.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    },
    {
      id: "keria",
      gameName: "Keria",
      realName: "Ryu Min-seok",
      role: "Support",
      nationality: "South Korea",
      picture: "/assets/images/Keria.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    }
  ],
  2024: [
    {
      id: "faker",
      gameName: "Faker",
      realName: "Lee Sang-hyeok",
      role: "Mid",
      nationality: "South Korea",
      picture: "/assets/images/Faker.png",
      nationalityCode: "KR",
      joinedYear: 2013,
      birthYear: 1996,
      active: true
    },
    {
      id: "zeus",
      gameName: "Zeus",
      realName: "Choi Woo-je",
      role: "Top",
      nationality: "South Korea",
      picture: "/assets/images/Zeus.png",
      nationalityCode: "KR",
      joinedYear: 2022,
      birthYear: 2004,
      active: true
    },
    {
      id: "oner",
      gameName: "Oner",
      realName: "Moon Hyeon-joon",
      role: "Jungle",
      nationality: "South Korea",
      picture: "/assets/images/Oner.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    },
    {
      id: "gumayusi",
      gameName: "Gumayusi",
      realName: "Lee Min-hyeong",
      role: "ADC",
      nationality: "South Korea",
      picture: "/assets/images/Gumayusi.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    },
    {
      id: "keria",
      gameName: "Keria",
      realName: "Ryu Min-seok",
      role: "Support",
      nationality: "South Korea",
      picture: "/assets/images/Keria.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    }
  ],
  2023: [
    {
      id: "faker",
      gameName: "Faker",
      realName: "Lee Sang-hyeok",
      role: "Mid",
      nationality: "South Korea",
      picture: "/assets/images/Faker.png",
      nationalityCode: "KR",
      joinedYear: 2013,
      birthYear: 1996,
      active: true
    },
    {
      id: "zeus",
      gameName: "Zeus",
      realName: "Choi Woo-je",
      role: "Top",
      nationality: "South Korea",
      picture: "/assets/images/Zeus.png",
      nationalityCode: "KR",
      joinedYear: 2022,
      birthYear: 2004,
      active: true
    },
    {
      id: "oner",
      gameName: "Oner",
      realName: "Moon Hyeon-joon",
      role: "Jungle",
      nationality: "South Korea",
      picture: "/assets/images/Oner.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    },
    {
      id: "gumayusi",
      gameName: "Gumayusi",
      realName: "Lee Min-hyeong",
      role: "ADC",
      nationality: "South Korea",
      picture: "/assets/images/Gumayusi.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    },
    {
      id: "keria",
      gameName: "Keria",
      realName: "Ryu Min-seok",
      role: "Support",
      nationality: "South Korea",
      picture: "/assets/images/Keria.png",
      nationalityCode: "KR",
      joinedYear: 2021,
      birthYear: 2002,
      active: true
    }
  ]
};

export const rosterLegends: Record<number, string> = {
  2025: "Three-Peat Dynasty",
  2024: "Back-to-Back Champions",
  2023: "The Comeback"
};

// Player Stats
export const playerStats: Record<number, Record<string, PlayerStats>> = {
  2025: {
    faker: {
      gamesPlayed: 185,
      overallStats: {
        kda: 4.8,
        winRate: 67.5,
        kills: 4.1,
        deaths: 1.8,
        assists: 7.5
      },
      topChampions: [
        {
          champion: "Azir",
          games: 35,
          wins: 28,
          losses: 7,
          winRate: 80.0,
          kda: 5.2
        },
        {
          champion: "Orianna",
          games: 22,
          wins: 20,
          losses: 2,
          winRate: 90.9,
          kda: 10.1
        },
        {
          champion: "Corki",
          games: 28,
          wins: 19,
          losses: 9,
          winRate: 67.9,
          kda: 4.5
        },
        {
          champion: "Ahri",
          games: 18,
          wins: 14,
          losses: 4,
          winRate: 77.8,
          kda: 5.8
        },
        {
          champion: "Twisted Fate",
          games: 15,
          wins: 11,
          losses: 4,
          winRate: 73.3,
          kda: 4.1
        }
      ],
      achievements: [
        "Worlds 2025 Champion",
        "LCK Spring 2025 Champion"
      ]
    },
    doran: {
      gamesPlayed: 185,
      overallStats: {
        kda: 3.6,
        winRate: 67.5,
        kills: 2.5,
        deaths: 2.3,
        assists: 6.0
      },
      topChampions: [
        {
          champion: "Gnar",
          games: 28,
          wins: 18,
          losses: 10,
          winRate: 64.3,
          kda: 3.1
        },
        {
          champion: "Renekton",
          games: 22,
          wins: 14,
          losses: 8,
          winRate: 63.6,
          kda: 2.9
        },
        {
          champion: "K'Sante",
          games: 20,
          wins: 13,
          losses: 7,
          winRate: 65.0,
          kda: 3.0
        },
        {
          champion: "Aatrox",
          games: 18,
          wins: 12,
          losses: 6,
          winRate: 66.7,
          kda: 3.4
        },
        {
          champion: "Jax",
          games: 16,
          wins: 11,
          losses: 5,
          winRate: 68.8,
          kda: 3.2
        }
      ],
      achievements: [
        "Worlds 2025 Champion",
        "LCK Spring 2025 Champion"
      ]
    },
    oner: {
      gamesPlayed: 185,
      overallStats: {
        kda: 5.1,
        winRate: 67.5,
        kills: 3.6,
        deaths: 1.7,
        assists: 8.0
      },
      topChampions: [
        {
          champion: "Sejuani",
          games: 35,
          wins: 26,
          losses: 9,
          winRate: 74.3,
          kda: 5.9
        },
        {
          champion: "Vi",
          games: 28,
          wins: 22,
          losses: 6,
          winRate: 78.6,
          kda: 5.3
        },
        {
          champion: "Viego",
          games: 24,
          wins: 18,
          losses: 6,
          winRate: 75.0,
          kda: 4.8
        },
        {
          champion: "Xin Zhao",
          games: 20,
          wins: 15,
          losses: 5,
          winRate: 75.0,
          kda: 5.5
        },
        {
          champion: "Lee Sin",
          games: 18,
          wins: 13,
          losses: 5,
          winRate: 72.2,
          kda: 4.6
        }
      ],
      achievements: [
        "Worlds 2025 Champion",
        "LCK Spring 2025 Champion"
      ]
    },
    gumayusi: {
      gamesPlayed: 185,
      overallStats: {
        kda: 5.3,
        winRate: 67.5,
        kills: 5.1,
        deaths: 1.6,
        assists: 5.8
      },
      topChampions: [
        {
          champion: "Kalista",
          games: 32,
          wins: 25,
          losses: 7,
          winRate: 78.1,
          kda: 5.6
        },
        {
          champion: "Varus",
          games: 26,
          wins: 20,
          losses: 6,
          winRate: 76.9,
          kda: 6.2
        },
        {
          champion: "Ashe",
          games: 24,
          wins: 18,
          losses: 6,
          winRate: 75.0,
          kda: 5.8
        },
        {
          champion: "Jhin",
          games: 22,
          wins: 16,
          losses: 6,
          winRate: 72.7,
          kda: 5.1
        },
        {
          champion: "Lucian",
          games: 18,
          wins: 13,
          losses: 5,
          winRate: 72.2,
          kda: 5.4
        }
      ],
      achievements: [
        "Worlds 2025 Champion",
        "LCK Spring 2025 Champion"
      ]
    },
    keria: {
      gamesPlayed: 185,
      overallStats: {
        kda: 6.1,
        winRate: 67.5,
        kills: 1.5,
        deaths: 1.9,
        assists: 11.2
      },
      topChampions: [
        {
          champion: "Senna",
          games: 38,
          wins: 28,
          losses: 10,
          winRate: 73.7,
          kda: 6.8
        },
        {
          champion: "Poppy",
          games: 26,
          wins: 20,
          losses: 6,
          winRate: 76.9,
          kda: 6.2
        },
        {
          champion: "Rell",
          games: 22,
          wins: 16,
          losses: 6,
          winRate: 72.7,
          kda: 5.4
        },
        {
          champion: "Renata Glasc",
          games: 20,
          wins: 15,
          losses: 5,
          winRate: 75.0,
          kda: 7.8
        },
        {
          champion: "Nami",
          games: 18,
          wins: 14,
          losses: 4,
          winRate: 77.8,
          kda: 8.2
        }
      ],
      achievements: [
        "Worlds 2025 Champion",
        "LCK Spring 2025 Champion"
      ]
    }
  },
  2024: {
    faker: {
      gamesPlayed: 176,
      overallStats: {
        kda: 4.2,
        winRate: 64.2,
        kills: 3.5,
        deaths: 2.1,
        assists: 6.8
      },
      topChampions: [
        {
          champion: "Azir",
          games: 31,
          wins: 23,
          losses: 8,
          winRate: 74.2,
          kda: 4.05
        },
        {
          champion: "Corki",
          games: 32,
          wins: 16,
          losses: 16,
          winRate: 50.0,
          kda: 3.93
        },
        {
          champion: "Orianna",
          games: 17,
          wins: 16,
          losses: 1,
          winRate: 94.1,
          kda: 9.57
        },
        {
          champion: "Ahri",
          games: 12,
          wins: 10,
          losses: 2,
          winRate: 83.3,
          kda: 5.22
        },
        {
          champion: "Twisted Fate",
          games: 14,
          wins: 7,
          losses: 7,
          winRate: 50.0,
          kda: 2.48
        }
      ],
      achievements: [
        "Worlds 2024 Champion",
        "LCK Spring 2024 Champion"
      ]
    },
    zeus: {
      gamesPlayed: 176,
      overallStats: {
        kda: 3.8,
        winRate: 64.2,
        kills: 2.8,
        deaths: 2.3,
        assists: 6.2
      },
      topChampions: [
        {
          champion: "K'Sante",
          games: 31,
          wins: 21,
          losses: 10,
          winRate: 67.7,
          kda: 2.73
        },
        {
          champion: "Aatrox",
          games: 19,
          wins: 14,
          losses: 5,
          winRate: 73.7,
          kda: 3.12
        },
        {
          champion: "Gnar",
          games: 14,
          wins: 8,
          losses: 6,
          winRate: 57.1,
          kda: 2.78
        },
        {
          champion: "Camille",
          games: 13,
          wins: 11,
          losses: 2,
          winRate: 84.6,
          kda: 3.5
        },
        {
          champion: "Ornn",
          games: 13,
          wins: 11,
          losses: 2,
          winRate: 84.6,
          kda: 5.68
        }
      ],
      achievements: [
        "Worlds 2024 Champion",
        "LCK Spring 2024 Champion"
      ]
    },
    oner: {
      gamesPlayed: 176,
      overallStats: {
        kda: 4.5,
        winRate: 64.2,
        kills: 3.2,
        deaths: 2.0,
        assists: 7.2
      },
      topChampions: [
        {
          champion: "Sejuani",
          games: 33,
          wins: 22,
          losses: 11,
          winRate: 66.7,
          kda: 5.47
        },
        {
          champion: "Vi",
          games: 24,
          wins: 18,
          losses: 6,
          winRate: 75.0,
          kda: 4.25
        },
        {
          champion: "Viego",
          games: 17,
          wins: 13,
          losses: 4,
          winRate: 76.5,
          kda: 4.49
        },
        {
          champion: "Xin Zhao",
          games: 14,
          wins: 11,
          losses: 3,
          winRate: 78.6,
          kda: 5.92
        },
        {
          champion: "Nocturne",
          games: 7,
          wins: 7,
          losses: 0,
          winRate: 100.0,
          kda: 5.73
        }
      ],
      achievements: [
        "Worlds 2024 Champion",
        "LCK Spring 2024 Champion"
      ]
    },
    gumayusi: {
      gamesPlayed: 176,
      overallStats: {
        kda: 4.6,
        winRate: 64.2,
        kills: 4.2,
        deaths: 2.0,
        assists: 5.2
      },
      topChampions: [
        {
          champion: "Kalista",
          games: 26,
          wins: 19,
          losses: 7,
          winRate: 73.1,
          kda: 4.23
        },
        {
          champion: "Varus",
          games: 19,
          wins: 15,
          losses: 4,
          winRate: 78.9,
          kda: 5.81
        },
        {
          champion: "Ashe",
          games: 18,
          wins: 14,
          losses: 4,
          winRate: 77.8,
          kda: 5.51
        },
        {
          champion: "Tristana",
          games: 19,
          wins: 8,
          losses: 11,
          winRate: 42.1,
          kda: 2.72
        },
        {
          champion: "Lucian",
          games: 13,
          wins: 9,
          losses: 4,
          winRate: 69.2,
          kda: 5.19
        }
      ],
      achievements: [
        "Worlds 2024 Champion",
        "LCK Spring 2024 Champion"
      ]
    },
    keria: {
      gamesPlayed: 176,
      overallStats: {
        kda: 5.2,
        winRate: 64.2,
        kills: 1.2,
        deaths: 2.1,
        assists: 9.8
      },
      topChampions: [
        {
          champion: "Senna",
          games: 31,
          wins: 22,
          losses: 9,
          winRate: 71.0,
          kda: 5.89
        },
        {
          champion: "Poppy",
          games: 19,
          wins: 14,
          losses: 5,
          winRate: 73.7,
          kda: 4.79
        },
        {
          champion: "Rell",
          games: 18,
          wins: 12,
          losses: 6,
          winRate: 66.7,
          kda: 3.32
        },
        {
          champion: "Renata Glasc",
          games: 14,
          wins: 11,
          losses: 3,
          winRate: 78.6,
          kda: 9.11
        },
        {
          champion: "Nami",
          games: 11,
          wins: 8,
          losses: 3,
          winRate: 72.7,
          kda: 11.82
        }
      ],
      achievements: [
        "Worlds 2024 Champion",
        "LCK Spring 2024 Champion"
      ]
    }
  },
  2023: {
    faker: {
      gamesPlayed: 156,
      overallStats: {
        kda: 4.5,
        winRate: 66.7,
        kills: 3.8,
        deaths: 2.0,
        assists: 7.0
      },
      achievements: [
        "Worlds 2023 Champion",
        "Worlds 2023 Finals MVP",
        "LCK Spring 2023 Champion"
      ]
    },
    zeus: {
      gamesPlayed: 156,
      overallStats: {
        kda: 4.1,
        winRate: 66.7,
        kills: 3.0,
        deaths: 2.2,
        assists: 6.5
      },
      achievements: [
        "Worlds 2023 Champion",
        "LCK Spring 2023 Champion"
      ]
    },
    oner: {
      gamesPlayed: 156,
      overallStats: {
        kda: 4.8,
        winRate: 66.7,
        kills: 3.4,
        deaths: 1.9,
        assists: 7.6
      },
      achievements: [
        "Worlds 2023 Champion",
        "LCK Spring 2023 Champion"
      ]
    },
    gumayusi: {
      gamesPlayed: 156,
      overallStats: {
        kda: 5.0,
        winRate: 66.7,
        kills: 4.5,
        deaths: 1.8,
        assists: 5.3
      },
      achievements: [
        "Worlds 2023 Champion",
        "LCK Spring 2023 Champion"
      ]
    },
    keria: {
      gamesPlayed: 156,
      overallStats: {
        kda: 5.5,
        winRate: 66.7,
        kills: 1.3,
        deaths: 2.0,
        assists: 9.9
      },
      achievements: [
        "Worlds 2023 Champion",
        "LCK Spring 2023 Champion"
      ]
    }
  }
};

// Achievements
export const achievements: Record<number, Achievement[]> = {
  2025: [
    {
      tournament: "Worlds 2025",
      placement: "1st",
      prize: "$525,000"
    },
    {
      tournament: "LCK Spring 2025",
      placement: "1st"
    },
    {
      tournament: "LCK Summer 2025",
      placement: "1st"
    }
  ],
  2024: [
    {
      tournament: "Worlds 2024",
      placement: "1st",
      prize: "$445,000"
    },
    {
      tournament: "LCK Spring 2024",
      placement: "1st"
    },
    {
      tournament: "LCK Summer 2024",
      placement: "2nd"
    }
  ],
  2023: [
    {
      tournament: "Worlds 2023",
      placement: "1st",
      prize: "$489,500"
    },
    {
      tournament: "LCK Spring 2023",
      placement: "1st"
    },
    {
      tournament: "LCK Summer 2023",
      placement: "2nd"
    }
  ]
};

// Sponsors
export const sponsors: Sponsor[] = [
  {
    name: "Nike",
    category: "Apparel & Equipment",
    since: 2020,
    type: "Global Partner",
    active: true
  },
  {
    name: "Red Bull",
    category: "Energy Drink",
    since: 2019,
    type: "Official Partner",
    active: true
  },
  {
    name: "Mercedes-Benz Korea",
    category: "Automotive",
    since: 2023,
    type: "Official Partner",
    active: true
  },
  {
    name: "Razer",
    category: "Gaming Peripherals",
    since: 2018,
    type: "Hardware Partner",
    active: true
  },
  {
    name: "Logitech G",
    category: "Gaming Hardware",
    since: 2021,
    type: "Hardware Partner",
    active: true
  },
  {
    name: "Red Sea Global",
    category: "Tourism & Hospitality",
    since: 2025,
    type: "Official Partner",
    active: true
  },
  {
    name: "Klevv",
    category: "Gaming Memory",
    since: 2022,
    type: "Official Gaming Memory Partner",
    active: true
  },
  {
    name: "SK Telecom",
    category: "Telecommunications",
    since: 2013,
    type: "Owner & Title Sponsor",
    active: true
  },
  {
    name: "Comcast Spectacor",
    category: "Sports & Entertainment",
    since: 2019,
    type: "Co-Owner",
    active: true
  },
  {
    name: "Twitch",
    category: "Streaming Platform",
    since: 2017,
    type: "Streaming Partner",
    active: true
  }
];

// Coaches
export const coaches: Record<number, Coach[]> = {
  2025: [
    {
      name: "kkOma",
      realName: "Kim Jeong-gyun",
      role: "Head Coach",
      joinedYear: 2024,
      birthYear: 1985,
      picture:"/assets/images/kkOma.webp"
    },
    {
      name: "Tom",
      realName: "Im Jae-hyeon",
      role: "Coach",
      joinedYear: 2023,
      birthYear: 1995,
      picture:"/assets/images/Tom.webp"
    }
  ],
  2024: [
    {
      name: "kkOma",
      realName: "Kim Jeong-gyun",
      role: "Head Coach",
      joinedYear: 2024,
      birthYear: 1985,
      picture:"/assets/images/kkOma.webp"
    },
    {
      name: "Tom",
      realName: "Im Jae-hyeon",
      role: "Coach",
      joinedYear: 2023,
      birthYear: 1995,
      picture:"/assets/images/Tom.webp"
    }
  ],
  2023: [
    {
      name: "Bengi",
      realName: "Bae Seong-woong",
      role: "Head Coach",
      joinedYear: 2021,
      birthYear: 1993,
      picture:"/assets/images/Bengi.webp"
    },
    {
      name: "Tom",
      realName: "Im Jae-hyeon",
      role: "Interim Head Coach",
      joinedYear: 2023,
      birthYear: 1995,
      picture:"/assets/images/Tom.webp"
    },
    {
      name: "Roach",
      realName: "Kim Kang-hee",
      role: "Coach",
      joinedYear: 2023,
      birthYear: 1999,
      picture:"/assets/images/Roach.webp"
    }
  ]
};
