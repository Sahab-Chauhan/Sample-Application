import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employee: Employee[] = [];
  public employeeform!: FormGroup;
  issubmitted = false;
  public searchText!: string;
  listData!: MatTableDataSource<any>;
  displayedColumns:string[] = ['id','name','gender','designation','salary','birthdate','action'];
  @ViewChild(MatSort) sort!: MatSort;
   @ViewChild(MatPaginator) paginator!:MatPaginator;
  public dataSource: any;
  public array: any;
  pageEvent!: any;
  div1!:string;
  isShow:boolean = false;
  birthdate:any;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private service: EmployeeService, private formbuilder: FormBuilder) {
    debugger
    this.getEmployees();
    this.employeeform = this.formbuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      gender: ['male', Validators.required],
      designation: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      salary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      birthdate:['']
    });
  }

  get employeeFormControl() {
    return this.employeeform.controls;
  }

  ngOnInit(): void {
  }
  //Get all employees
  public getEmployees() {
    return this.service.getEmployeeList().subscribe((data: Employee[]) => {
      debugger
      this.employee = data;
      this.listData=new MatTableDataSource(data);
      this.listData.sort=this.sort;
      this.listData.paginator = this.paginator;
    }) 
  }
  //Create a new Employee
  public createEmployee() {

    if (this.employeeform.value.id != '' && this.employeeform.value.id) {
      return this.service.updateEmployee(this.employeeform.value).subscribe((data: Employee) => {
        alert("Employee Updated Successfully");
        this.getEmployees();
      })
    }
    else {
      debugger
      return this.service.createEmployee(this.employeeform.value).subscribe((data: Employee) => {
        alert("Employee Addedd Successfully");
        this.getEmployees();
      })
    }
  }
  //Get Employee by id
  public getEmployeeById(id: number) {
    return this.service.getEmployeeById(id).subscribe((data: Employee) => {
      this.employeeform.patchValue(data);
      //alert("Employee Addedd Successfully");
    })
  }
  //delete Employee by id
  public deleteEmployeeById(id: number) {
    this.service.deleteEmployee(id).subscribe(() => {
      alert("Employee Deleted Successfully");
      this.getEmployees();
    })
  }
  //Reset the Employee
  public resetEmployee() {
    this.employeeform.reset();
  }

  //toggle button click
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

}
