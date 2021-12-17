import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public baseUrl = 'http://localhost:3000/';
  
  constructor(private http: HttpClient) { }

  //Get All Employee
  public getEmployeeList(): Observable<Employee[]> {
    debugger
    return this.http.get<Employee[]>(`${this.baseUrl}employee`)
  }

  //Create a new Employee
  public createEmployee(data: Employee): Observable<Employee> {
    debugger
    return this.http.post<Employee>(`${this.baseUrl}employee`,data)
  }

  //Get Employee by id
  public getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}employee/${id}`)
  }

  //Update Employee detail by id
  public updateEmployee(data: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}employee/${data.id}`,data)
  }

  //Delete Employee by id
  public deleteEmployee(id: number): Observable<number>{
    return this.http.delete<number>(`${this.baseUrl}employee/${id}`);
  }
}
