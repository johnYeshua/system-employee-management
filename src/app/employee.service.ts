import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees : Employee[] = [
                                    {id: 1, name: 'John', email:'john@snva.com', address:'1777 Goldman Street', phonenumber: +1571777777}, 
                                    {id: 2, name: 'Peter', email:'peter@snva.com', address:'1778 Goldman Street', phonenumber: +1571777377}, 
                                    {id: 3, name: 'Shaul', email:'shaul@snva.com', address:'1773 Goldman Street', phonenumber: +1571777477},
                                    {id: 4, name: 'John', email:'john@snva.com', address:'1777 Goldman Street', phonenumber: +1571777777}, 
                                    {id: 5, name: 'Peter', email:'peter@snva.com', address:'1778 Goldman Street', phonenumber: +1571777377}, 
                                    {id: 6, name: 'Shaul', email:'shaul@snva.com', address:'1773 Goldman Street', phonenumber: +1571777477},
                                    {id: 7, name: 'John', email:'john@snva.com', address:'1777 Goldman Street', phonenumber: +1571777777}, 
                                    {id: 8, name: 'Peter', email:'peter@snva.com', address:'1778 Goldman Street', phonenumber: +1571777377}, 
                                    {id: 9, name: 'Shaul', email:'shaul@snva.com', address:'1773 Goldman Street', phonenumber: +1571777477},
                                    {id: 10, name: 'John', email:'john@snva.com', address:'1777 Goldman Street', phonenumber: +1571777777}, 
                                    {id: 11, name: 'Peter', email:'peter@snva.com', address:'1778 Goldman Street', phonenumber: +1571777377}, 
                                    {id: 12, name: 'Shaul', email:'shaul@snva.com', address:'1773 Goldman Street', phonenumber: +1571777477},
                                    {id: 13, name: 'John', email:'john@snva.com', address:'1777 Goldman Street', phonenumber: +1571777777}, 
                                    {id: 14, name: 'Peter', email:'peter@snva.com', address:'1778 Goldman Street', phonenumber: +1571777377}, 
                                    {id: 15, name: 'Shaul', email:'shaul@snva.com', address:'1773 Goldman Street', phonenumber: +1571777477},
                                    {id: 16, name: 'John', email:'john@snva.com', address:'1777 Goldman Street', phonenumber: +1571777777}, 
                                    {id: 17, name: 'Peter', email:'peter@snva.com', address:'1778 Goldman Street', phonenumber: +1571777377}, 
                                    {id: 18, name: 'Shaul', email:'shaul@snva.com', address:'1773 Goldman Street', phonenumber: +1571777477},
                                    {id: 19, name: 'John', email:'john@snva.com', address:'1777 Goldman Street', phonenumber: +1571777777}, 
                                    {id: 20, name: 'Peter', email:'peter@snva.com', address:'1778 Goldman Street', phonenumber: +1571777377}, 
                                    {id: 21, name: 'Shaul', email:'shaul@snva.com', address:'1773 Goldman Street', phonenumber: +1571777477},
                                  ];
  constructor() { }

  getEmployeeList(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee{
    return this.employees.find((employee) => employee.id === id);
  }

  addEmployee(id: number, employee: Employee){
    employee.id = id;
    return this.employees.push(employee);
  }


  updateEmployee(id: number, employee: Employee){
    employee.id = id;
    return this.employees.push(employee);
  }

  removeEmployee(id: number){
    console.log("Employee id: " +id);
    let employees : Employee[] = [];
    employees = this.employees.splice(id, 1);
    employees.forEach((ele)=>console.log(ele));
    return employees;
  }
}
