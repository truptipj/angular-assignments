import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RegisterService } from '../core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: any;

  constructor(private registerService: RegisterService, private fb:FormBuilder, private router:Router,) { }

  ngOnInit(): void {
      this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [  '', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]  ],
       },);
  }
  public onSubmit(): void {
    console.log(this.registerForm.value);
    let url = environment.baseUrl + "Register";
    this.registerService.registerPostData(url,this.registerForm.value).subscribe((res)=>{
      if(res.result) {
        this.router.navigate(['login'])
      }
    })

    localStorage.setItem('form-data', JSON.stringify(this.registerForm.value));
}
openLogin(){
  this.router.navigate(['login'])
}
}
