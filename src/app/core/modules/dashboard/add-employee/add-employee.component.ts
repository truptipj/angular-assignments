import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm:any= FormGroup;

  constructor(private router:Router,private empService:EmployeeService,private fb: FormBuilder) {}

  ngOnInit(){
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      location: ['', [Validators.required]],
      isActive:[true]
    })
  }

  get employeeControl() { return this.employeeForm.controls; }

  addEmployee() {
    if (this.employeeForm.invalid) {
      return;
    }
    this.empService.addEmployee(this.employeeForm.value).subscribe(response => {
       this.router.navigate(['admin/dashboard/employee-list'])
    })
  }
}
