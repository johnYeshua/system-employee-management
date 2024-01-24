import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService){
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.employees = this.employeeService.getEmployeeList();
  }

}
