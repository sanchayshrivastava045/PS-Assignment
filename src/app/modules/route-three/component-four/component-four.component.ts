import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.scss']
})
export class ComponentFourComponent implements OnInit {
  @Input()countOnStatePauseStart:any
  constructor() { }

  ngOnInit(): void {
  }

}
