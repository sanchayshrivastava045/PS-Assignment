import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  counterState$ = new BehaviorSubject({
    count: 0,
    limit: 1000,
    pause: [{}]
  })
  constructor() { }

  getCounterState(){
    return this.counterState$.asObservable()
  }
  setCounterState(value:any){
    this.counterState$.next(value)
  }

  
}
