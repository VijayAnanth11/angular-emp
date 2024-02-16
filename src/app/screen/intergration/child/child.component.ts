import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PassingService } from '../passing.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // .........Child Component Code..........
  text: any;

  // @Input() message = "";
  // @Input() itum = "";

  @Output() parentFuction: EventEmitter<any> = new EventEmitter();

  // Constructor() { }

  // ngOnInit(): void {
  // }

  sendData() {
    this.text = "Check"
    this.parentFuction.emit(this.text);
  }

  // .............End...........

  message!: string;
  constructor(private data: PassingService) {}

  ngOnInit() {
  }



}
