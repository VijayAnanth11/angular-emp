import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  currentMessage = 'Done';
  currentItem = 'item';

  text="";

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.text)
  }

}
