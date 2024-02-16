import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  EmployeeArray: Employee[] = [];
  Employeeformgroup: FormGroup;


  constructor(private empservice: EmployeeService, private formbuilder: FormBuilder) {
    this.Employeeformgroup = this.formbuilder.group({
      id: [""],
      empId: [""],
      empName: [""],
      empAddress: [""],
      empContact: [""],
      empSalary: [""],
      isActive: [""]
    })
  }

  ngOnInit(): void {
    this.getemployee();
  }

  getemployee() {
    this.empservice.GetEmployee().subscribe(response => {
      this.EmployeeArray = response;
    })
  }

  onsubmit() {
    console.log(this.Employeeformgroup.value)
    if (this.Employeeformgroup.value.id != null && this.Employeeformgroup.value.id != "") {
      this.empservice.UpdateEmployee(this.Employeeformgroup.value).subscribe(response => {
        console.log(response);
        this.getemployee();
        this.Employeeformgroup.setValue({
          id:"",
          empId: "",
          empName: "",
          empAddress: "",
          empContact: "",
          empSalary: "",
          isActive: ""
        })
      });
    }
    else {
      this.empservice.CreateEmployee(this.Employeeformgroup.value).subscribe(response => {
        console.log(response);
        this.getemployee();
        this.Employeeformgroup.setValue({
          id:"",
          empId: "",
          empName: "",
          empAddress: "",
          empContact: "",
          empSalary: "",
          isActive: ""
        })
      });
    }
  }

  setUpdate(EmployeeItem: Employee) {
    this.Employeeformgroup.setValue({
      id: EmployeeItem.id,
      empId: EmployeeItem.empId,
      empName: EmployeeItem.empName,
      empAddress: EmployeeItem.empAddress,
      empContact: EmployeeItem.empContact,
      empSalary: EmployeeItem.empSalary,
      isActive: EmployeeItem.isActive

    })
    console.log(this.Employeeformgroup.value)
  }

  setDelete(id: string) {
    this.empservice.DeleteEmployee(id).subscribe(response => {
      console.log(response);
      this.getemployee();
    })
  }

} 
