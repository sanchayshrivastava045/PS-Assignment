import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit {
 @Input()counter:any
  constructor() { }

  ngOnInit(): void {
  }

}
