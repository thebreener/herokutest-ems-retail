import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MomentDate} from '../../_models/date';


@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss']
})
export class DaterangepickerComponent implements OnInit {
  @Output() onSelect =  new EventEmitter<any>();
  public daterange: MomentDate = {};



  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'DD-MM-YYYY HH:mm',
    weekLabel: "Week",
    applylavel: "save"},
    alwaysShowCalendars: false,
    timePicker24Hour: true,
    timePicker: true,
    timePickerIncrement: 5,
    showWeekNumbers: true,
    cancelClass: "cancel-button",
    opens: "center",

  };

  public selectedDate(value: any, datepicker?: MomentDate) {
    datepicker.start = value.start;
    datepicker.end = value.end;
    this.daterange.start = value.start;
    this.daterange.end = value.end;

    this.onSelect.emit(this.daterange);
  }

  constructor() { }

  ngOnInit() {
  }

}
