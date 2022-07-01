import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},

  {path:'', redirectTo:'/login', pathMatch: 'full'},
   {path: 'register', component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   {path:'login', component:LoginComponent},
//   {path:'', redirectTo:'/login', pathMatch: 'full'},
//   {path:'home',component:HomeComponent,
//   children:[
//     {path:'dashboard',component:DashboardComponent},
//    {path:'', redirectTo:'home/dashboard', pathMatch: 'full'},
//   ]}
   
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }