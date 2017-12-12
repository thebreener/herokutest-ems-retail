import {Campaign} from './campaign';
import {Retailer} from './retailer';

export class User {
  id: number;
  username: string;
  password: string;
  retailer: string;
  firstName: string;
  lastName: string;
  logo: string;
  campaigns:Campaign[];
  retailers:Retailer[];
}
