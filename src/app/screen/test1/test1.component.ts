import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  listArray:any = [
    {
      id:1,
      name:'check1',
      disablebutton: false,
    },
    {
      id:2,
      name:'check2',
      disablebutton: false,
    },
    {
      id:3,
      name:'check3',
      disablebutton: false,
    },
    {
      id:4,
      name:'check4',
      disablebutton: false,
    },
  ]

  ngOnInit(): void {  
  }

  // disablebutton:boolean = false;
  toggle = true

  addtomainrecord(list:any) {
    // list.disablebutton=true;
    this.toggle = !this.toggle;
    list.disablebutton = this.toggle? false: true;
    
 }
  
}
