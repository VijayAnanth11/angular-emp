import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})

export class CheckComponent implements OnInit {

  data: any;
  myForm!: FormGroup;

  records: any = [
    {
      id:1,
      name:'Vijay',
    },
    {
      id:2,
      name:'vvvv',
    },
    {
      id:3,
      name:'iiii',
    },
    {
      id:4,
      name:'jjjjj',
    },
  ];

  //later in my code
  addtomainrecord() {
    this.disablebutton = true;
    console.log(this.records)
  }

  //
  onSubmit(form: NgForm) {
    console.log(this.data)
  }

  ID: any;
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };

  //form
  isSubmitted = false;
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  City2: any = ['Fbbbb', 'Sohhhhhh', 'Tggggg', 'hhhhhhhh'];

  constructor(private httpClient: HttpClient, public fb: FormBuilder) { }

  //form
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]],
    cityName2: ['', [Validators.required]],
  });

  get cityName() {
    return this.registrationForm.get('cityName');
  }

  changeCity(e: any) {
    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get cityName2() {
    return this.registrationForm.get('cityName2');
  }

  changeCity2(e: any) {
    this.cityName2?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  //submit button
  onSubmit2(): void {
    console.log(this.registrationForm.value);
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }


  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);

    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  ngOnInit() {
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.Events,
        dateClick: this.onDateClick.bind(this),
      };
    }, 2500);

    //
    this.myForm = new FormGroup({
      'presentDate': new FormControl((new Date()).toISOString().substring(0, 10))
    });

    //disable previous date
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("txtDate")[0].setAttribute('min', today);

  }

  //
  toggle = true;
  status = 'Enable';

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  //hide and show
  div1: boolean = false;
  div2: boolean = false;
  div3: boolean = false;

  div1Function() {
    this.div1 = true;
    this.div2 = false;
    this.div3 = false
  }

  div2Function() {
    this.div2 = true;
    this.div1 = false;
    this.div3 = false
  }

  div3Function() {
    this.div3 = true;
    this.div2 = false;
    this.div1 = false
  }

  cancel() {
    this.div3 = false;
    this.div2 = false;
    this.div1 = false
  }

  //next and previous button works
  items: any[] = []; // Your complete data array
  currentPage = 1;
  itemsPerPage = 10;

  displayedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }


  //
  disablebutton: boolean = false;

 

}
