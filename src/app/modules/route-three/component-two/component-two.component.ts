import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit, OnChanges {
  @Input() counter: any = undefined;
  @Output() startStopTimer: EventEmitter<boolean> = new EventEmitter();
  @Output() resetTimer: EventEmitter<boolean> = new EventEmitter();
  @Output() initialLimit: EventEmitter<number> = new EventEmitter();


  limit: any;
  isTimerStop = true
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.counter, changes)
  }

  startPauseMethod() {
    this.isTimerStop = !this.isTimerStop
    this.startStopTimer.emit(this.isTimerStop)
  }
  resetMethod() {
    this.resetTimer.emit(true)
    this.limit=0
  }
  getLimitValue(value: any) {
    this.initialLimit.emit(value)
  }
}
