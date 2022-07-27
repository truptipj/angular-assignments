import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard/auth-guard.service';
import { DashboardComponent } from './core/modules/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  // {  
  //   path: '',  
  //   redirectTo: 'web',  
  //   pathMatch: 'full'  
  // },
  {
    path: '',
    loadChildren: () => import('./core/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./core/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [AuthGuard],
    
  },
 
  
  // {path:'login', component:LoginComponent},

  // { path: 'admin', component: LayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'customers', pathMatch: 'full' },
  //     {
  //       path: 'customers',
  //       loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
