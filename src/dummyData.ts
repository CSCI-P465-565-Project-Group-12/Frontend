import { IVenue } from "./IVenue";

export interface IEvent {
    name: string;
    venueId?: string;
    ageRange: string;
    cost: string;
    capacity: number;
    activityStatus: string;
    startTime: string;
    endTime: string;
    images: string[];
    coverImg: string;
}


export const events:IEvent[] = [
  {
    name: "IU Hoosiers vs Northwestern Wildcats",
    venueId: "1",
    ageRange: "All Ages",
    cost: "$20",
    capacity: 1000,
    activityStatus: "Active",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    images: ["https://a.espncdn.com/media/motion/2023/0108/ss_20230108_141254491_21517931055/ss_20230108_141254491_21517931055.jpg"],
    coverImg: "https://a.espncdn.com/media/motion/2023/0108/ss_20230108_141254491_21517931055/ss_20230108_141254491_21517931055.jpg",
  },
  {
    name: "McCormick Tribune Ice Rink",
    venueId: "2",
    ageRange: "All Ages",
    cost: "Free",
    capacity: 1000,
    activityStatus: "Active",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    images: ["https://cdn.choosechicago.com/uploads/2023/11/mpicerink-900x400.jpg"],
    coverImg: "https://cdn.choosechicago.com/uploads/2023/11/mpicerink-900x400.jpg",
  },
  {
    name: "Tampa Bay Chocolate Festival",
    venueId: "3",
    ageRange: "All Ages",
    cost: "$15",
    capacity: 1000,
    activityStatus: "Active",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    images: ["https://thatssotampa.com/wp-content/uploads/2023/12/ChocFestNew.jpg"],
    coverImg: "https://thatssotampa.com/wp-content/uploads/2023/12/ChocFestNew.jpg",
  },
  {
    name: "United States Grand Prix",
    venueId: "4",
    ageRange: "All Ages",
    cost: "$50",
    capacity: 1000,
    activityStatus: "Active",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    images: ["https://media.formula1.com/content/dam/fom-website/sutton/2022/USA/Sunday/1435987206.jpg.img.1536.high.jpg"],
    coverImg: "https://media.formula1.com/content/dam/fom-website/sutton/2022/USA/Sunday/1435987206.jpg.img.1536.high.jpg",
  },
  {
    name: "Squash court reservation",
    venueId: "5",
    ageRange: "All Ages",
    cost: "Free",
    capacity: 1000,
    activityStatus: "Active",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    images: ["https://indianapublicmedia.org/images/news-images/srsc.jpg"],
    coverImg: "https://indianapublicmedia.org/images/news-images/srsc.jpg",
  },
  {
    name: "Focus room reservation",
    venueId: "6",
    ageRange: "All Ages",
    cost: "Free",
    capacity: 1000,
    activityStatus: "Active",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    images: ["https://www.wbiw.com/wordpress/wp-content/uploads/2020/10/herman-library.jpg"],
    coverImg: "https://www.wbiw.com/wordpress/wp-content/uploads/2020/10/herman-library.jpg",
  }
]
export const venues:IVenue[]= [
  {
    name: "Simon Skjodt Assembly Hall",
    state: "Indiana",
    city: "Bloomington",
    street: "1001 E 17th St",
    zipcode: "47408",
    venueStatus: "Active",
    details: {
      description: "IU Athletics",
      price: "Free",
      venueNotes: "IU Athletics",
      eventOrganizer: "IU Athletics",
    },
    venueType: "Athletics",
    images: ["https://images.news.iu.edu/dams/tycwct_w768.jpg","https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fiuhoosiers.com%2Fimages%2F2018%2F12%2F18%2FAssembly_Hall_Progress_ED_17.JPG&height=300"],
    Reservations: [],
    activities: [
      events[0],
    ],
  },
  {
    name: "McCormick Tribune Ice Rink",
    state: "Illinois",
    city: "Chicago",
    street: "201 E Randolph St",
    zipcode: "60602",
    venueStatus: "Active",
    details: {
      description: "McCormick Tribune Ice Rink",
      price: "Free",
      venueNotes: "McCormick Tribune Ice Rink",
      eventOrganizer: "McCormick Tribune Ice Rink",
    },
    venueType: "Ice Rink",
    images: ["https://cdn.choosechicago.com/uploads/2023/11/mpicerink-900x400.jpg"],
    Reservations: [],
    activities: [
      events[1],
    ],
  },
  {
    name: "Florida State Fairgrounds",
    state: "Florida",
    city: "Tampa",
    street: "4800 US-301",
    zipcode: "33610",
    venueStatus: "Active",
    details: {
      description: "Tampa Bay Chocolate Festival",
      price: "$15",
      venueNotes: "Tampa Bay Chocolate Festival",
      eventOrganizer: "Tampa Bay Chocolate Festival",
    },
    venueType: "Festival",
    images: ["https://thatssotampa.com/wp-content/uploads/2023/12/ChocFestNew.jpg"],
    Reservations: [],
    activities: [
      events[2],
    ],
  },
  {
    name: "Circuit of the Americas",
    state: "Texas",
    city: "Austin",
    street: "9201 Circuit of the Americas Blvd",
    zipcode: "78617",
    venueStatus: "Active",
    details: {
      description: "Circuit of the Americas",
      price: "$50",
      venueNotes: "Circuit of the Americas",
      eventOrganizer: "Circuit of the Americas",
    },
    venueType
    : "Racetrack",
    images: ["https://media.formula1.com/content/dam/fom-website/sutton/2022/USA/Sunday/1435987206.jpg.img.1536.high.jpg"],
    Reservations: [],
    activities: [
      events[3],
    ],
  }
];