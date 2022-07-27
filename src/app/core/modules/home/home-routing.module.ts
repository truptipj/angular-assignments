import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DummyUserComponent } from './dummy-user/dummy-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch: 'full'},
 

  {
    path:'', 
    component: HomeComponent,
    children: [
      {
        path:'', component: DummyUserComponent
      },
      {
        path:'login', component: LoginComponent
      },
      {
        path:'register', component: RegisterComponent
      },
      {
        path:'aboutUs', component: AboutUsComponent
      },
      {
        path:'contactUs', component: ContactUsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
