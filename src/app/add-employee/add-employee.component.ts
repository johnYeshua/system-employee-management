import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employees: Employee[] = [];
  employee: Employee = new Employee(77, 'Mean', 'mean@mern.com', '123 mern street', 123456789);
  data: any
  constructor(private employeeService: EmployeeService, private router:Router){

   }
  
  ngOnInit(): void{
    this.employees = this.employeeService.getEmployeeList();
  }
  saveEmployee(): any{
    
    this.employeeService.addEmployee(this.employees.length + 1, this.employee);
    this.router.navigate(['/employee']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}