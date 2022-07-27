import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { HomeService } from 'src/app/core/services/home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  // phoneValidate = { minLength: 0, maxLength: 10, digitPattern: '' };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private homeService: HomeService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,/),
        ],
      ],
    });
  }
  get loginControl() {
    return this.loginForm.controls;
  }
  submit() {
    let url = environment.baseUrl + 'Login';
    this.homeService.postData(url, this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res.result) {
        this.authService.setToken(res.result);
        this.router.navigate(['admin']);
      }
    });
  }
  goToRegister() {
    this.router.navigate(['home/home/register']);
  }
}
