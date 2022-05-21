import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    bio:"Adarsh balika of neogCamp",
    portfolioURL:"adarshbalika.netlify.app/",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balak",
    username: "adarshbalak",
    bio:"Adarsh balak of neogCamp",
    portfolioURL:"adarshbalika.netlify.app/",
    password: "adarshBalak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    userImage:"",
    firstName: "Tushar",
    lastName: "Goyal",
    username: "tushargoyal29",
    bio:"Student at neogCamp|Learning full stack development",
    portfolioURL:"tushar29.netlify.app",
    password: "tushar",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
