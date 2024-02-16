import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Qualification } from '../model/qualification';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }


  //These are Employee controller Api
  baseurl = "https://localhost:7122/api/Employee";
  urlpost = "https://localhost:7122/api/Employee/AddEmployee";

  GetEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseurl)
  }

  CreateEmployee(emp: Employee): Observable<Employee> {
    emp.id = "000000000000000000000";
    return this.httpClient.post<Employee>(this.urlpost, emp)
  }

  UpdateEmployee(emp: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.baseurl + '/' + emp.id, emp);
  }

  DeleteEmployee(Id: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.baseurl + '/' + Id);
  }

  //These are Qualification controller Api
  url2 = "https://localhost:7122/api/Qualification";
  urlpost2 = "https://localhost:7122/api/Qualification/AddQualification";

  GetQualification(): Observable<Qualification[]> {
    return this.httpClient.get<Qualification[]>(this.url2)
  }

  CreateQualification(emp: Qualification): Observable<Qualification> {
    emp.id = "000000000000000000000";
    return this.httpClient.post<Qualification>(this.urlpost2, emp)
  }

  UpdateQualification(emp: Qualification): Observable<Qualification> {
    return this.httpClient.put<Qualification>(this.url2 + '/' + emp.id, emp);
  }

  DeleteQualification(id: string): Observable<Qualification> {
    return this.httpClient.delete<Qualification>(this.url2 + '/' + id);
  }


}