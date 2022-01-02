import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss']
})
export class RouteThreeComponent implements OnInit {
  initialTimerLimit: any;
  startStopValue: any;
  timerRef: any;
  countOnStatePauseStart: { start: number; pause: number; } = { start: 0, pause: 0 };

  constructor() { }
  counter = {
    count: 0,
    limit: 1000,
    pause: [{}]
  }
  ngOnInit(): void {
  }
  getResetTimer(value: any) {
    this.counter.count = 0;
    clearInterval(this.timerRef);
    this.counter = {
      count: 0,
      limit: 0,
      pause: [{}]
    }
    this.countOnStatePauseStart ={start:0, pause:0}
  }
  getStartStopTimer(value: any) {
    this.startStopValue = value
    if (!this.startStopValue) {
      this.startTimer()
      this.counter.pause.push({ method: 'start', time: Date.now(), pause_at: this.counter.count })

    } else {
      clearInterval(this.timerRef);
      this.counter.pause.push({ method: 'pause', time: Date.now(), pause_at: this.counter.count })
    }
    this.countOnStatePauseStart = { start: this.counter.pause.filter((data: any) => data.method == 'start').length, pause: this.counter.pause.filter((data: any) => data.method == 'pause').length }
  }
  getInitialLimit(value: any) {
    this.initialTimerLimit = value
    clearInterval(this.timerRef);
    this.counter.pause = []
  }

  startTimer() {
    this.timerRef = setInterval(() => {
      this.counter.count += 1;
      if (this.initialTimerLimit == this.counter.count) {
        clearInterval(this.timerRef);
      }
    }, 1000);


  }
}
