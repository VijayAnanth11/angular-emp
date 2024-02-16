import { Component, OnInit, Input } from '@angular/core';
import { NewService } from '../new.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  
  constructor(private data: NewService) { }

  ngOnInit() {

  }

  @Input() message = '';


}
