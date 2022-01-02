import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-four',
  templateUrl: './time-four.component.html',
  styleUrls: ['./time-four.component.scss']
})
export class TimeFourComponent implements OnInit {
  countOnStatePauseStart: { start: any; pause: any; } = { start: 0, pause: 0 };

  constructor(
    private timeService: TimeService
  ) { }

  ngOnInit(): void {
    this.getCounterState()
  }
  getCounterState() {
    this.timeService.getCounterState().subscribe((data: any) => {
      this.countOnStatePauseStart = { start: data.pause.filter((data: any) => data.method == 'start').length, pause: data.pause.filter((data: any) => data.method == 'pause').length }
      if (!data.pause.length) {
        this.countOnStatePauseStart = { start: 0, pause: 0 }
      }
    })
  }

}
