import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Campaign} from '../../_models/campaign';
import {MomentDate} from '../../_models/date';

@Component({
  selector: 'app-editor-form',
  templateUrl: './editor-form.component.html',
  styleUrls: ['./editor-form.component.scss']
})
export class EditorFormComponent implements OnInit {
  @Input() campaign:Campaign;
  @Output() onCreate = new EventEmitter<any>();

  creating:boolean;
  constructor() { }

  ngOnInit() {
  }

  createCampaign(){
    this.creating = true;
    this.onCreate.emit();
  }
  selectedDate(dateObject:MomentDate){
    this.campaign.startDate = dateObject.start;
    this.campaign.endDate = dateObject.end;
  }
}
