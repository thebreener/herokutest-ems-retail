import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Retailer} from "../../_models/retailer";
import {RetailerShop} from "../../_models/retailer-shop";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  @Input() retailer: Retailer;
  @Output() onChecked = new EventEmitter<RetailerShop[]>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleChecked(shop: RetailerShop) {
    shop.checked = !shop.checked;

    let selected: RetailerShop[] = [];
    for (let i=0; i<this.retailer.shops.length; i++) {
      let shop : RetailerShop = this.retailer.shops[i];
      if (shop.checked) {
        selected.push(shop);
      }
    }
    this.onChecked.emit(selected);
  }
}
