import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-two',
  templateUrl: './time-two.component.html',
  styleUrls: ['./time-two.component.scss']
})
export class TimeTwoComponent implements OnInit {
  counterState: any;
  limit = 0
  isTimerStop: boolean = false;
  resetTimer: boolean = false;
  timerRef: any;
  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.getCounterState()
  }
  getCounterState() {
    this.timeService.getCounterState().subscribe(data => {
      this.counterState = data
    })
  }
  // getLimitValue()
  // (resetTimer)="getResetTimer($event)" (startStopTimer)="getStartStopTimer($event)"
  // (initialLimit)="getInitialLimit($event)" [counter]="counter.pause"

  getLimitValue(value: any) {
    this.timeService.setCounterState({ ...this.counterState, limit: value })
  }

  startPauseMethod() {
    this.isTimerStop = !this.isTimerStop
    clearInterval(this.timerRef);
    if (this.isTimerStop) {
      this.timerRef = setInterval(() => {
        this.counterState.count += 1;
        this.timeService.setCounterState({ ...this.counterState, count: this.counterState.count })
        if (this.limit == this.counterState.count) {
          clearInterval(this.timerRef);
        }

      }, 1000);


      this.counterState.pause.push({ method: 'start', time: Date.now(), pause_at: this.counterState.count })

    } else {
      clearInterval(this.timerRef);
      this.counterState.pause.push({ method: 'pause', time: Date.now(), pause_at: this.counterState.count })
    }
  }
  resetMethod() {
    this.limit = 0;
    clearInterval(this.timerRef);
    this.counterState.pause = []
    this.counterState.count=0
    this.timeService.setCounterState({...this.counterState})
    this.limit =0

  }
}
