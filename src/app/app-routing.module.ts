import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo: '', pathMatch: 'full'},

  { path: 'expense', loadChildren: () => import('./core/expense/expense.module').then(m => m.ExpenseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



