import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.scss']
})
export class RouteSixComponent implements OnInit {
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  array:Array<any> =[];
  sum = 100;
  count =0;
  constructor() { }

  ngOnInit(): void {
    this.appendItems(0, this.sum);
  }
  onScroll() {
    console.log('scrolled!!');
  }
  addItems(startIndex: number, endIndex: number, _method: any) {
    for (let i = 0; i < this.sum; ++i) {
      this.count += 1
      this.array[_method](this.count)
    }
  }
  onScrollDown() {

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = "down";
  }
  appendItems(startIndex: any, endIndex: number) {
    this.addItems(startIndex, endIndex, "push");
  }
  onUp() {
    const start = this.sum;
    this.sum += 20;
    // this.prependItems(start, this.sum);

    this.direction = "up";
  }

  getClickedDiv(event:any){
    alert(`Button in div ${event.target.innerHTML} clicked`)
  }

}
