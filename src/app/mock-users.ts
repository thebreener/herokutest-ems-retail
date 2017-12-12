import {User} from "./_models/user";
import { RETAILERS } from './mock-retailer';

export const USERS: [User] = [
  {id:1, username:'admin', password:'admin', retailer:'emplate',firstName:'Kasper',lastName:'Terp', logo: '/assets/images/emplate-logo.png', campaigns:[], retailers:RETAILERS},
  {id:2, username:'wagner', password:'wagner', retailer:'Wagner',firstName:'Wagner',lastName:'Wagner', logo:'/assets/images/wagner-logo.png', campaigns:[], retailers:[RETAILERS[0]]},
  {id:3, username:'imerco', password:'imerco', retailer:'Imerco',firstName:'Imerco',lastName:'Imerco', logo: '/assets/images/imerco-logo.png', campaigns:[], retailers:[RETAILERS[2]]},
];
