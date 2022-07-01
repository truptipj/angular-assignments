import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { WebService } from '../servises/web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  phoneValidate = { minLength: 0, maxLength: 0, digitPattern: '' };
  constructor(private fb:FormBuilder, private router:Router, private webService: WebService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,/)]]
    })
  }
  get loginControl() { return this.loginForm.controls; }
  submit(){
    let url = environment.baseUrl + "Login";
    this.webService.postData(url,this.loginForm.value).subscribe((res)=>{
      console.log(res);
      if(res.result) {
    this.router.navigate(['dashboard']);
      }
    })
  }
  openDashboard(){
    console.log('xyz');
    this.router.navigate(['register'])
  }
  public onSubmit(): void {
    localStorage.setItem('form-data', JSON.stringify(this.loginForm.value));
  }
}
  







