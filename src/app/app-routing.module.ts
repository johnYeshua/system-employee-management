import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'employee', component: EmployeeComponent,
    children:[
      { path: ':id', component: EmployeeDetailsComponent}
    ]
  },
  {path: 'add', component: AddEmployeeComponent},
  {path: 'update', component: UpdateEmployeeComponent },
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
