import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Qualification } from 'src/app/model/qualification';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-qualification-screen',
  templateUrl: './qualification-screen.component.html',
  styleUrls: ['./qualification-screen.component.css']
})
export class QualificationScreenComponent implements OnInit {

  QualificationArray: Qualification[] = [];
  Employeeformgroup: FormGroup;

  constructor(private empservice: EmployeeService, private formbuilder: FormBuilder) {
    this.Employeeformgroup = this.formbuilder.group({
      id: [""],
      empid: [""],
      empQualification: [""]
    })
  }

  ngOnInit(): void {
    this.getqualification();
  }

  getqualification() {
    this.empservice.GetQualification().subscribe(response => {
      this.QualificationArray = response;
    })
  }

  onsubmit(){
    console.log(this.Employeeformgroup.value)
    if (this.Employeeformgroup.value.id != null && this.Employeeformgroup.value.id != "") {
      this.empservice.UpdateQualification(this.Employeeformgroup.value).subscribe(response => {
        console.log(response);
        this.getqualification();
        this.Employeeformgroup.setValue({
          id:"",
          empid: "",
          empQualification: ""
        })
      });
    }
    else {
      this.empservice.CreateQualification(this.Employeeformgroup.value).subscribe(response => {
        console.log(response);
        this.getqualification();
        this.Employeeformgroup.setValue({
          id:"",
          empid: "",
          empQualification: ""
        })
      });
    }
  }

  setUpdate(Item: Qualification) {
    this.Employeeformgroup.setValue({
      id: Item.id,
      empid: Item.empid,
      empQualification: Item.empQualification
    })
    console.log(this.Employeeformgroup.value)
  }

  setDelete(id: string) {
    this.empservice.DeleteQualification(id).subscribe(response => {
      console.log(response);
      this.getqualification();
    })
  }


}
