import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeForm:any= FormGroup;
  userData : any;
  constructor(private router:Router,private empService:EmployeeService,private authService:AuthService,private fb: FormBuilder) {}

  ngOnInit(){
    this.userData  = (localStorage.getItem('userObj'))
    this.userData = JSON.parse(this.userData)
    this.employeeForm = this.fb.group({
      id: [this.userData.id || '', [Validators.required]],
      firstName: [this.userData.firstName || '', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: [this.userData.lastName || '', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      mobileNumber: [this.userData.mobileNumber || '', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      location: [this.userData.location || '', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      isActive:[true]
    })
    // this.employeeForm.get('id').disable();
  }

  get employeeControl() { return this.employeeForm.controls; }

  updateEmployee() {
    if (this.employeeForm.invalid) {
      return;
    }
    console.log(this.employeeForm.value);
    this.empService.updateEmployee(this.employeeForm.value).subscribe(response => {
     if(response.result){
            this.router.navigate(['admin/dashboard/employee-list'])
     }
      
    })
    this.router.navigate(['admin/dashboard/employee-list'])

  }
}