import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Campaign} from '../../_models/campaign';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() state:number;
  @Input() campaign:Campaign;
  @Output() onDelete = new EventEmitter<Campaign>();
  constructor() {

  }

  ngOnInit() {
  }

  delete(){
    this.onDelete.emit(this.campaign);
  }
}
