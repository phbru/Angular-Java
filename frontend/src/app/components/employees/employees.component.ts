import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  public employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void{
    // this.employeeService.fetchEmployees().subscribe((response: Employee[])=>{this.employees = response},
    //  (error : HttpErrorResponse)=> {alert("error fetching employees")}
    //  );

     this.employeeService.fetchEmployees().subscribe({
        next: (response: Employee[])=>{this.employees = response},
        error: (error : HttpErrorResponse)=> {alert("error fetching employees : " + error.message)}
     });
  }
}
