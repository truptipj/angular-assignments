import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  // phoneValidate = { minLength: 0, maxLength: 10, digitPattern: '' };
  constructor(private fb:FormBuilder, private router:Router, private loginService: LoginService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,/)]]
    })
  }
  get loginControl() { return this.loginForm.controls; }
  submit(){
    let url = environment.baseUrl + "Login";
    this.loginService.loginPostData(url,this.loginForm.value).subscribe((res)=>{
      console.log(res);
      if(res.result) {
    this.router.navigate(['dashboard']);
      }
    })
  }
  goToRegister(){
    
    this.router.navigate(['register'])
  }

}
  







