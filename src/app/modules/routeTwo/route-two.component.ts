import { Component, OnInit } from '@angular/core';
import { SortPipe } from 'ngx-easy-table/lib/pipes/sort.pipe';
import * as Json from '../../../assets/DATA.json';
@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {
  isGridView: boolean = true;
  mockTempData = [];
  obj = [ 
    {
        "id": 1,
        "product_name": "Item 1",
        "price": 1600,
        "photo":"https://images.unsplash.com/photo-1640506054499-2b040ca19023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 2,
        "product_name": "Item 2",
        "price": 980,
        "photo":"https://images.unsplash.com/photo-1640453102434-f2f4b472edb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
    },
    {  
        "id": 3,
        "product_name": "Item 3",
        "price": 810,
        "photo":"https://images.unsplash.com/photo-1640562051318-b849e5290551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 4,
        "product_name": "Item 4",
        "price": 1010,
        "photo":"https://images.unsplash.com/photo-1640532050700-59303b2a898b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 5,
        "product_name": "Item 5",
        "price": 1800,
        "photo":"https://images.unsplash.com/photo-1640601696042-6b2a69645a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 6,
        "product_name": "Item 6",
        "price": 580,
        "photo":"https://images.unsplash.com/photo-1640535171310-c61c1e2fd79f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 7,
        "product_name": "Item 7",
        "price": 910,
        "photo":"https://images.unsplash.com/photo-1640587896067-4e7d923143e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 8,
        "product_name": "Item 8",
        "price": 799,
        "photo":"https://images.unsplash.com/photo-1640557434280-96024d8b3d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 9,
        "product_name": "Item 9",
        "price": 650,
        "photo":"https://images.unsplash.com/photo-1640536752785-7e1ff23dcfe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 10,
        "product_name": "Item 10",
        "price": 780,
        "photo":"https://images.unsplash.com/photo-1640562329119-efcaa3dcf18d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 11,
        "product_name": "Item 11",
        "price": 749,
        "photo":"https://images.unsplash.com/photo-1640562767746-02f946ec0630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 12,
        "product_name": "Item 12",
        "price": 910,
        "photo":"https://images.unsplash.com/photo-1640600572207-768afff828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 13,
        "product_name": "Item 13",
        "price": 840,
        "photo":"https://images.unsplash.com/photo-1640544351861-930d12160bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 14,
        "product_name": "Item 14",
        "price": 920,
        "photo":"https://images.unsplash.com/photo-1640595635946-cf301352aa38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 15,
        "product_name": "Item 15",
        "price": 860,
        "photo":"https://images.unsplash.com/photo-1640552866583-3f574f6ab5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 16,
        "product_name": "Item 16",
        "price": 500,
        "photo":"https://images.unsplash.com/photo-1640563601303-ea376fe56e30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 17,
        "product_name": "Item 17",
        "price": 549,
        "photo":"https://images.unsplash.com/photo-1640570558209-d9eb720a1777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 18,
        "product_name": "Item 18",
        "price": 649,
        "photo":"https://images.unsplash.com/photo-1640600942459-61262bd73945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 19,
        "product_name": "Item 19",
        "price": 810,
        "photo":"https://images.unsplash.com/photo-1640601328369-85d76d7a7e99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 20,
        "product_name": "Item 20",
        "price": 1400,
        "photo":"https://images.unsplash.com/photo-1640600572159-b10af75b3f49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 21,
        "product_name": "Item 21",
        "price": 911,
        "photo":"https://images.unsplash.com/photo-1640600828499-d24e48f168b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 22,
        "product_name": "Item 22",
        "price": 700,
        "photo":"https://images.unsplash.com/photo-1640590889488-004d857ef36c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 23,
        "product_name": "Item 23",
        "price": 1600,
        "photo":"https://images.unsplash.com/photo-1640576905072-8181534f83ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 24,
        "product_name": "Item 24",
        "price": 1349,
        "photo":"https://images.unsplash.com/photo-1640594970128-6107a635a164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 25,
        "product_name": "Item 25",
        "price": 980,
        "photo":"https://images.unsplash.com/photo-1640588334021-3d7618f1339f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 26,
        "product_name": "Item 26",
        "price": 1500 ,
        "photo":"https://images.unsplash.com/photo-1640598452495-c0a560aaa0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 27,
        "product_name": "Item 27",
        "price": 1311,
        "photo":"https://images.unsplash.com/photo-1640595556705-005e7b7ea2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 28,
        "product_name": "Item 28",
        "price": 1049,
        "photo":"https://images.unsplash.com/photo-1640551231337-c64eefb396f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 29,
        "product_name": "Item 29",
        "price": 888,
        "photo":"https://images.unsplash.com/photo-1640543468855-b47cd750578d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 30,
        "product_name": "Item 30",
        "price": 1000,
        "photo":"https://images.unsplash.com/photo-1640594023807-bfff6adc221c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        "id": 31,
        "product_name": "Item 31",
        "price": 1200,
        "photo":"https://images.unsplash.com/photo-1640596370461-5bfbc57a77c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 32,
        "product_name": "Item 32",
        "price": 700,
        "photo":"https://images.unsplash.com/photo-1640532050408-056dd3d94c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 33,
        "product_name": "Item 33",
        "price": 649,
        "photo":"https://images.unsplash.com/photo-1640503158272-07ef84eb8684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 34,
        "product_name": "Item 34",
        "price": 720,
        "photo":"https://images.unsplash.com/photo-1640532050771-0274b43075bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 35,
        "product_name": "Item 35",
        "price": 899,
        "photo":"https://images.unsplash.com/photo-1640532050708-53b0fcfd52a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 36,
        "product_name": "Item 36",
        "price": 849,
        "photo":"https://images.unsplash.com/photo-1640506545701-a0b1b174827d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 37,
        "product_name": "Item 37",
        "price": 999,
        "photo":"https://images.unsplash.com/photo-1640522293257-9454cc4a762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 38,
        "product_name": "Item 38",
        "price": 1111,
        "photo":"https://images.unsplash.com/photo-1640546088631-fd6e3e88dec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 39,
        "product_name": "Item 39",
        "price": 1120,
        "photo":"https://images.unsplash.com/photo-1640513785948-088aeff9aa32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {    
        "id": 40,
        "product_name": "Item 40",
        "price": 2000,
        "photo":"https://images.unsplash.com/photo-1640506586997-ede0b7a6f13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    }
];    

  constructor() { }
  mockData: any = Json
  ngOnInit(): void {
    this.mockData = this.mockData.default
    this.mockTempData = this.mockData
  }

  getView(value: string) {
    this.isGridView = value == 'list' ? false : true
  }

  getDropdownValue(value: any) {
    
    if(value.target.value == "1")
    {
      this.mockData= this.obj?.sort((a, b) => (a.price > b.price ? 1 : -1))  
    }else
    {
      this.mockData = this.obj?.sort((a, b) => (a.price > b.price ? -1 : 1))     
    }
  }
}