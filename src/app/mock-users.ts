import {User} from "./_models/user";
import { RETAILERS } from './mock-retailer';
import { CAMPAIGNS } from "./mock-campaigns";

export const USERS: [User] = [
  {id:1, username:'admin', password:'admin', retailer:'emplate',firstName:'Kasper',lastName:'Terp', logo: '/assets/images/emplate-logo.png', campaigns:[CAMPAIGNS[0],CAMPAIGNS[1],CAMPAIGNS[2],CAMPAIGNS[3],CAMPAIGNS[4],CAMPAIGNS[5],CAMPAIGNS[6],CAMPAIGNS[7]], retailers:RETAILERS},
  {id:2, username:'wagner', password:'wagner', retailer:'Wagner',firstName:'Wagner',lastName:'Wagner', logo:'/assets/images/wagner-logo.png', campaigns:[CAMPAIGNS[0],CAMPAIGNS[1],CAMPAIGNS[2],CAMPAIGNS[3]], retailers:[RETAILERS[0]]},
  {id:3, username:'imerco', password:'imerco', retailer:'Imerco',firstName:'Imerco',lastName:'Imerco', logo: '/assets/images/imerco-logo.png', campaigns:[CAMPAIGNS[4],CAMPAIGNS[5],CAMPAIGNS[6],CAMPAIGNS[7]], retailers:[RETAILERS[2]]},
];
