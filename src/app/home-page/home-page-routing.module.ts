import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  

  
  {path:'', redirectTo:'home', pathMatch: 'full'},

  {
    path:'home', 
    component: HomeComponent,
    children: [
      {
        path:'login', component: LoginComponent
      },
      {
        path:'register', component: RegisterComponent
      },
      {
        path:'aboutUs', component: RegisterComponent
      },
      {
        path:'contactUs', component: RegisterComponent
      }
    ]
  },
  // {path:'login', component:LoginComponent},

  // {path:'', redirectTo:'/login', pathMatch: 'full'},
  //  {path: 'register', component:RegisterComponent},
  // {path:'home',component:HomeComponent}


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
