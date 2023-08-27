
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaUtensilSpoon,
  FaBed,
  FaUsers,
  FaBeer,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

import { nanoid } from "nanoid";

// Importing images
import rest1 from "../Images/rest1.jpg";
import restaurantProfile from "../Images/restaurantProfile.jpg";
import conference1 from "../Images/con01.jpg";
import bar1 from "../Images/bar1.jpg";
import room1 from "../Images/room1.jpg";
import room01 from "../Images/room01.jpg";
import room2 from "../Images/room2.jpg";
import con2 from "../Images/conference2.jpg";
import con1 from "../Images/conference1.jpg";
import con5 from "../Images/conference5.jpg";
import con6 from "../Images/conference6.jpg";

// importing food images
import food1 from "../Images/food1.jpg";
import food2 from "../Images/food2.jpg";
import food3 from "../Images/food3.jpg";
import food4 from "../Images/food4.jpg";
import food5 from "../Images/food5.jpg";
import food6 from "../Images/food6.jpg";
import food7 from "../Images/food7.jpg";

export const services = [
    {
        id: nanoid(),
        text: "dining", 
        icon: <FaUtensilSpoon/> 
    },
    {
        id: nanoid(),
        text: "accomodation", 
        icon: <FaBed/> 
    },
    {
        id: nanoid(),
        text: "conference", 
        icon: <FaUsers/> 
    },
    {
        id: nanoid(),
        text: "lounge", 
        icon: <FaBeer/> 
    },
];
export const displays = [
  {
    id: nanoid(),
    hd1: "dining",
    text1:
      "Ava Sky hotel offers a variety of local and nationwide dishes found across Kenya.",
    text2: "Get a delicious feeding you will not get anywhere else.",
    image: restaurantProfile,
    hd3: "Ava sky Restaurant",
    text3:
      "Welcome to our restaurant page! We are delighted to have you here. At our restaurant, we offer a delightful culinary experience that combines mouthwatering flavors with a warm and inviting atmosphere.",
    text4:
      "Our menu is thoughtfully crafted to cater to a variety of tastes and preferences. From delectable appetizers to sumptuous main courses and delectable desserts, our dishes are prepared with the finest ingredients and an artistic touch.",
    button: "View meals",
    url: "dining",
  },
  {
    id: nanoid(),
    hd1: "accomodatoin",
    text1: "Ava Sky hotel offers affordable and budget rooms.",
    text2: "Get an elegant accomodation you will not get anywhere else.",
    image: room01,
    hd3: "Ava sky Lodging",
    text3:
      "Our accommodations are designed to provide a relaxing and inviting environment, ensuring that you feel right at home from the moment you arrive. Whether you're traveling for business or leisure, we have a range of room types to suit your needs",
    text4:
      "Each of our rooms is meticulously appointed with modern amenities and thoughtful touches to enhance your stay. Comfortable beds, plush linens, and carefully selected furnishings create a serene atmosphere for a restful night's sleep.",
    button: "Choose Room",
    url: "accomodation",
  },

  {
    id: nanoid(),
    hd1: "Conference",
    text1: "Ava Sky hotel has got spacious and comfortable conference room.",
    text2: "Get the condusiveness you will not get anywhere else.",
    image: conference1,
    text3:
      "Our conference rooms are designed to provide a professional and productive environment for meetings, seminars, workshops, and corporate gatherings of various sizes. Whether you're planning an intimate boardroom meeting or a large-scale conference, we have the perfect space to meet your needs.",
    text4:
      "We understand the importance of catering to your specific event requirements such as a projector. We also have a VIP room for a closed meeting.",
    hd3: "Meetings & Events",
    button: "View more info",
    url: "conferences",
  },
  {
    id: nanoid(),
    hd1: "lounge",
    text1:
      "Step into a vibrant and spirited atmosphere where we offer a wide range of beverages, expertly crafted cocktails.",
    text2: "Get a stunning refreshment at Ava Sky hotel toay",
    image: bar1,
    hd3: "Ava sky lounge",
    text3:
      "Our bar is a haven for beverage enthusiasts and social butterflies alike. With an extensive selection of premium spirits, wines, craft beers, and non-alcoholic options, we have something to satisfy every palate.",
    text4:
      "Whether you're in the mood for a refreshing signature cocktail, a perfectly poured pint, or a glass of fine wine, our bar has you covered.",
    button: "Call to order",
    url: "contact",
  },
];
export const roomDisplays = [
  {
    id: nanoid(),
    image: room1,
    hd3: "Budget Room",
    text1: "A room with a single bed",
    text2:
      "The room comes with all the common ammenities such as a room chair, a table, bottled water, bath towel, tissue paper, bathing soap, hot shower, a toilet among others.",
    hd4: "Kshs 1,500",
  },
  {
    id: nanoid(),
    image: room2,
    hd3: "Affordable Room",
    text1: "A room with a single bed + breakfast ",
    text2:
      "The room comes with all the common ammenities such as a room chair, a table, bottled water, bath towel, tissue paper, bathing soap, hot shower, a toilet among others.",
    hd4: "Kshs 2,000",
  },
];
export const links = [
  {
    id: nanoid(),
    url: "/",
    text: "home"
  },
  {
    id: nanoid(),
    url: "/dining",
    text: "dining"
  },
  {
    id: nanoid(),
    url: "/accomodation",
    text: "accomodation",
  },
  {
    id: nanoid(),
    url: "/conferences",
    text: "events",
  },
  {
    id: nanoid(),
    url: "/contact",
    text: "contact",
  },
];
export const foodSamples = [food1, food2, food3, food4, food5, food6, food7];
export const conferenceImages = [con1, con2, con5, con6];
export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/profile.php?id=100089098851894",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://wa.me/+254726833077",
    icon: <FaWhatsapp />,
  },
  {
    id: 4,
    url: "https://www.instagram.com/avasky_hotel/",
    icon: <FaInstagram />,
  },
];
export const meat = [
  {
    id: nanoid(),
    title: "Mbuzi",
    pricing: [
      {
        qty: "1kg",
        price: "1000/=",
      },
      {
        qty: "1/2kg",
        price: "500/=",
      },
      {
        qty: "1/4kg",
        price: "250/=",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Mbuzi choma",
    pricing: [
      {
        qty: "1kg",
        price: "900/=",
      },
      {
        qty: "1/2kg",
        price: "450/=",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Beef",
    pricing: [
      {
        qty: "1kg",
        price: "800/=",
      },
      {
        qty: "1/2kg",
        price: "400/=",
      },
      {
        qty: "1/4kg",
        price: "200/=",
      },
    ],
  },
  {
    id: nanoid(),
    title: "Kuku",
    pricing: [
      {
        qty: "Full",
        price: "1500/=",
      },
      {
        qty: "1/2",
        price: "800/=",
      },
      {
        qty: "1/4",
        price: "400/=",
      },
    ],
  },
];
export const mainMenu = [
  {
    title: "accompaniments",
    foods: [
      {
        food: "white ugali",
        price: "100/=",
      },
      {
        food: "brown ugali",
        price: "150/=",
      },
      {
        food: "steamed rice",
        price: "150/=",
      },
      {
        food: "roasted potatoes",
        price: "250/=",
      },
      {
        food: "stew potatoes",
        price: "200/=",
      },
      {
        food: "mashed potatoes",
        price: "250/=",
      },
      {
        food: "chips",
        price: "200/=",
      },
      {
        food: "chips masala",
        price: "250/=",
      },
      {
        food: "managu",
        price: "70/=",
      },
      {
        food: "sagaa",
        price: "50/=",
      },
      {
        food: "sukuma",
        price: "50/=",
      },
      {
        food: "spinach",
        price: "50/=",
      },
      {
        food: "cabbage",
        price: "50/=",
      },
      {
        food: "matoke",
        price: "150/=",
      },
      {
        food: "kachumbari",
        price: "50/=",
      },
    ],
  },
  {
    title: "Pilau special",
    foods: [
      {
        food: "beef pilau",
        price: "450/=",
      },
      {
        food: "goat pilau",
        price: "500/=",
      },
      {
        food: "chicken pilau",
        price: "600/=",
      },
      {
        food: "fish pilau",
        price: "800/=",
      },
      {
        food: "plain pilau",
        price: "300/=",
      },
    ],
  },
  {
    title: "Specials",
    foods: [
      {
        food: "bones soup",
        price: "100/=",
      },
      {
        food: "whole fish",
        price: "600/=",
      },
      {
        food: "fish fingers",
        price: "600/=",
      },
      {
        food: "fish fillets",
        price: "600/=",
      },
    ],
  },
  {
    title: "Snacks",
    foods: [
      {
        food : "samosa (Chips)",
        price: "100/=",
      },
      {
        food : "sausages (Chips)",
        price: "150/=",
      },
      {
        food : "chapati 2pcs",
        price: "100/=",
      },
      {
        food : "Egg of choice",
        price: "150/=",
      },
      {
        food : "smookies pair",
        price: "100/=",
      },
    ],
  },
  {
    title: "hot beverages",
    foods: [
      {
        food: "African tea",
        price: "100/=",
      },
      {
        food : "Black tea",
        price: "100/=",
      },
      {
        food : "white coffee",
        price: "150/=",
      },
      {
        food : "milk milo",
        price: "150/=",
      },
      {
        food : "milk chocolate",
        price: "150/=",
      },
      {
        food : "lemon tea",
        price: "150/=",
      },
      {
        food : "porridge",
        price: "100/=",
      },
      {
        food : "milk porridge",
        price: "200/=",
      },
    ],
  },
  {
    title: "cold beverages",
    foods: [
      {
        food: "fresh juice",
        price: "100/=",
      },
      {
        food : "cocktail juice",
        price: "150/=",
      },
      {
        food : "plain milk",
        price: "100/=",
      },
      {
        food : "mango juice",
        price: "200/=",
      },
    ],
  },
  {
    title: "avasky breakfast",
    foods: [
      {
        food: "Eggs of choice",
        price: "500/=",
      },
      {
        food: "Sausages",
        price: "500/=",
      },
      {
        food: "potatoes/matoke",
        price: "500/=",
      },
      {
        food: "Eggs of choice",
        price: "500/=",
      },
      {
        food: "bread",
        price: "500/=",
      },
      {
        food: "cereals",
        price: "500/=",
      },
      {
        food: "tea/coffee",
        price: "500/=",
      },
     
    ],
  },
];   

// export const pilau = [
  
// ];
// export const specials = [
  
 
// ];
// export const snacks = [
 
// ];
// export const hotBeverages = [
  
// ];
export const contacts = [
  {
    id: nanoid(),
    icon: <FaPhone />,
    hd4: "Call us directly on:",
    text1: "Tel: +254726833077",
    text2: "Tel: +254115900680",
  },
  {
    id: nanoid(),
    icon: <FaMapMarkerAlt />,
    hd4: "Visit us at:",
    text1: "Ava Sky Plaza, Keroka",
    text2: "Next to mwalimu academy on your way to DC office (Masaba North)",
  },
];
// export const AboutUsCards = [
//   {
//     id: nanoid(),
//     title: "Our mission",
//     text: "  At Kwintech, our mission is to empower businesses with innovative and sustainable ICT solutions",
//     icon: <FaBullseye />,
//   },
//   {
//     id: nanoid(),
//     title: "Our vision",
//     text: "To become a global leader in driving digital transformation for a better tomorrow",
//     icon: <FaEye />,
//   },
//   {
//     id: nanoid(),
//     title: "Core values",
//     text: [
//       {
//         id: nanoid(),
//         value: "Competency",
//       },
//       {
//         id: nanoid(),
//         value: "Hard work",
//       },
//       {
//         id: nanoid(),
//         value: "Integrity and trust",
//       },
//       {
//         id: nanoid(),
//         value: "Quality",
//       },
//     ],
//     icon: <FaCog />,
//   },
// ];

// export const clientsImages = [
//   {
//     id: nanoid(),
//     image: Iterio,
//   },
//   {
//     id: nanoid(),
//     image: KisiM,
//   },
//   {
//     id: nanoid(),
//     image: Kcg,
//   },
//   {
//     id: nanoid(),
//     image: Asumbi,
//   },
//   {
//     id: nanoid(),
//     image: Kericho,
//   },
//   {
//     id: nanoid(),
//     image: GlobalHealth,
//   },
//   {
//     id: nanoid(),
//     image: KenyaPower,
//   },
//   {
//     id: nanoid(),
//     image: powerHive,
//   },
//   {
//     id: nanoid(),
//     image: CatholicUni,
//   },
// ];
