import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{

  employees: Employee[] = [];
  employee: Employee;
  id: number;
  data: any;
  constructor(private employeeService: EmployeeService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.data = this.route.paramMap.subscribe(
      params => {
        this.id = parseInt(params.get('id'));
        this.employees = this.employeeService.getEmployeeList();
        this.employee = this.employees.find(ele=>ele.id === this.id);
      }
    );
    // console.log(this.employee.id);
    // console.log(this.employee.name);
    // console.log(this.employee.address);
    // console.log(this.employee.phonenumber);
  }

  deleteEmployee(id: number){
    this.employees = this.employeeService.removeEmployee(id);
    this.back();
  }
  back(){
    this.router.navigate(['/employee']);
  }
  onBack(){
    console.log("On back triggered!");
    this.back();
  }

}





/**
 *  employee: Employee;
  id: number;

  constructor(private employeeService: EmployeeService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    const id = this.route.snapshot.params.id;
    this.employee = this.employeeService.getEmployeeById(id);
    console.log(this.employee.id);
    console.log(this.employee.name);
    console.log(this.employee.address);
    console.log(this.employee.phonenumber);
  }

  onBack(){
    this.router.navigate(['employee']);
  }
 */