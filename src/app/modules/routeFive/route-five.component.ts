import { Component, OnInit } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import * as Json from '../../../assets/DATA.json'

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss']
})
export class RouteFiveComponent implements OnInit {
  public configuration: any = {};
  public columns: Columns[] = [];
  mockData: any = Json

  constructor() {
    this.mockData = this.mockData.default
  }

  ngOnInit(): void {
    this.configuration = { ...DefaultConfig, threeWaySort: "true",searchEnabled:false };

    this.columns = [
      { key: 'id', title: 'ID' },
      { key: 'product_name', title: 'Product Name' },
      { key: 'price', title: 'Price' },
      { key: 'photo', title: 'Photo' },
    ];
  }

}
