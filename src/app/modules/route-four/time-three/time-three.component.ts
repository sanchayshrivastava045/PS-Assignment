import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-three',
  templateUrl: './time-three.component.html',
  styleUrls: ['./time-three.component.scss']
})
export class TimeThreeComponent implements OnInit {
  counterState:any;

  constructor(private timeService:TimeService) { }

  ngOnInit(): void {
    this.getCounterState()
  }
  getCounterState() {
    this.timeService.getCounterState().subscribe(data => {
      this.counterState = data
    })
  }

}
