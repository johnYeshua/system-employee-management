import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  id:number;
  employees: Employee[] = [];
  employee: Employee = new Employee(77, 'Mean', 'mean@mern.com', '123 mern street', 123456789);
  data: any
  constructor(private employeeService: EmployeeService, private route:ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // we subscribe to getEmployeeId to return an observable 
    this.employee = this.employeeService.getEmployeeById(this.id);
  }

  onSubmit(){
    console.log(this.employee);
    this.employeeService.updateEmployee(this.id, this.employee);
      this.router.navigate(['/employee']);
  }
}

