import {Retailer} from "./retailer";
import {RetailerShop} from "./retailer-shop";
import {Moment} from 'moment';

export class Campaign {
  id: number;
  image: string;
  title: string;
  price?: number;
  description?: string;
  priceBefore?: number;
  startDate?: Moment;
  endDate?: Moment;
  retailer?: Retailer;
  shops?: RetailerShop[];
}
