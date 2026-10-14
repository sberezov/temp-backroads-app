import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const navLinks = ["home", "about", "services", "tours"];
export const socialLinks = [
  { id: 1, icon: "fab fa-facebook", href: "https://www.twitter.com" },
  { id: 2, icon: "fab fa-twitter", href: "https://www.twitter.com" },
  { id: 3, icon: "fab fa-squarespace", href: "https://www.twitter.com" },
];

export const servicesArray = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const toursArr = [
  {
    id: 1,
    date: "august 26th, 2020",
    img: tour1,
    title: "Tibet Adventure",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: "China",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    date: "august 26th, 2020",
    img: tour2,
    title: "best of java",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: "Indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    date: "august 26th, 2020",
    img: tour3,
    title: "explore hong kong",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: "Hong Kong",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    date: "august 26th, 2020",
    img: tour4,
    title: "kenya highlights",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: "Kenia",
    duration: 20,
    price: 3300,
  },
];
