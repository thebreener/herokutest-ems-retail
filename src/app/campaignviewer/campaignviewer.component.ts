import {Component, OnInit} from '@angular/core';
import {Campaign} from '../_models/campaign';
import {CampaignService, UserService} from '../_services/index';
import {User} from '../_models/user';

@Component({
  selector: 'app-campaignviewer',
  templateUrl: './campaignviewer.component.html',
  styleUrls: ['./campaignviewer.component.scss'],
})
export class CampaignviewerComponent implements OnInit {
  state: number;
  mockPreview:Campaign;
  campaigns:Campaign[];
  currentUser:User;

  constructor(private campaignService: CampaignService, private userService: UserService) {
    this.currentUser = userService.getCurrentUser();
    console.log("HELLO M8", this.currentUser);
  }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("notLogin");

  }

  deleteCampaign(campaign:Campaign){

    this.campaignService.delete(campaign);
    for(let i:number = 0; i<this.currentUser.campaigns.length; i++){
      if(campaign.id == this.currentUser.campaigns[i].id){
        this.currentUser.campaigns.splice(i,1);
        i--;
      }
    }


  }
}
