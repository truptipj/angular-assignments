import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch: 'full'},
 
  {
    path:'dashboard', 
    component: DashboardComponent,
    children: [

      {
        path:'employee-list', component: EmployeeListComponent
      },
      {
        path:'add-employee', component: AddEmployeeComponent
      },
      {
        path:'update-employee', component: UpdateEmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
