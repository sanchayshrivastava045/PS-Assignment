import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-one',
  templateUrl: './time-one.component.html',
  styleUrls: ['./time-one.component.scss']
})
export class TimeOneComponent implements OnInit {
  counter: any;

  constructor(private timeService:TimeService) { }

  ngOnInit(): void {
    this.getCounterState()
  }
  getCounterState() {
    this.timeService.getCounterState().subscribe((data:any) => {
      this.counter = data.count
    })
  }
}
