import {Component, Input, OnInit} from '@angular/core';
import {RETAILERS} from "../mock-retailer";
import {Retailer} from "../_models/retailer";
import {User} from '../_models/user';
import {CampaignService, UserService} from '../_services';
import {RetailerShop} from "../_models/retailer-shop";
import {Campaign} from "../_models/campaign";
import {Router} from '@angular/router';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.scss']

})

export class EditorComponent implements OnInit {
  @Input() editCampaign:Campaign;

  currentUser: User;
  users: User[] = [];
  retailers: Retailer[] = [];
  selectedShops = [];
  selectedRetailer = null;
  state: number;
  tempCampaign: Campaign;


  constructor(private router: Router, private userService: UserService, private campaignService: CampaignService) {
    this.state = 0;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(this.currentUser.retailers.length==1){
      this.selectedRetailer = this.currentUser.retailers[0];
    }

    console.log(this.editCampaign);
  }

  ngOnInit() {
    this.loadAllUsers();
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("notLogin");
    for (let i in RETAILERS) {
      this.retailers.push(RETAILERS[i]);
    }
  }
  onShopChecked(shops: RetailerShop[]){
    this.selectedShops = shops;
    console.log(this.selectedShops);
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.loadAllUsers()
    });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  onSelected(retailer:Retailer){
    if(retailer != this.selectedRetailer){
      this.selectedRetailer = retailer;
      for(let i:number = 0; i<this.selectedRetailer.shops.length; i++){
        this.selectedRetailer.shops[i].checked = false;
      }

      this.selectedShops = [];
    }
  }

  nextStep(){
    this.state=1;
    this.tempCampaign = new Campaign();
    this.tempCampaign ={
      id:-1,
      image: "",
      title:"",
      price: null,
      shops: this.selectedShops,
      retailer: this.selectedRetailer
    };
  }
  onFormChange(campaign: Campaign){
    this.tempCampaign = campaign;
  }

  onCampaignCreate(){

    this.campaignService.create(this.tempCampaign).subscribe(()=>{
      this.router.navigateByUrl('/');
    });
  }
}
