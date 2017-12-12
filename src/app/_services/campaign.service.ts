import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Campaign} from '../_models/campaign';


@Injectable()
export class CampaignService {
  constructor(private http: Http) { }

  create(campaign:Campaign) {
    return this.http.post('/api/campaignCreate', JSON.stringify(campaign), (response: Response) => response.json());
  }

  edit(campaign:Campaign) {
    return this.http.put('/api/campaignEdit', JSON.stringify(campaign), (response: Response) => response.json());
  }

  delete(campaign:Campaign) {
    return this.http.delete('/api/campaignDelete/'+campaign.id, (response: Response) => response.json());
  }
}
