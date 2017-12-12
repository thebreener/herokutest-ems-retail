import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Retailer} from "../../_models/retailer";

@Component({
  selector: 'app-retailer-list',
  templateUrl: './retailer-list.component.html',
  styleUrls: ['./retailer-list.component.scss']
})
export class RetailerListComponent implements OnInit {
  @Input() retailers:Retailer;
  @Output() onSelected = new EventEmitter<Retailer>();
  constructor() { }

  ngOnInit() {

  }

  selectRetailer(retailer:Retailer){
    this.onSelected.emit(retailer);
  }
}
