import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 
  customerForm:any;
  userList:any = [];
  selectedId:any;
  selctedIndex:any;
  isUpdate:boolean =false;


  constructor(private fb:FormBuilder) { }
   ngOnInit(): void {
  
  
  
     this.customerForm = this.fb.group({
       firstName: [''],
       lastName: [''],
       dob: [''],
       number: [''],
       email: ['']
     });
  
   }
   get loanFormControl() { return this.customerForm.controls; }
   addData() {
    let userObj = this.customerForm.value;
    userObj._id = Math.random().toString(16).slice(2);
    this.userList.push(userObj);
     this.isUpdate = false;
   }
   updateData() {
     let userObj = this.customerForm.value;
     userObj._id = this.selectedId;
     this.userList.splice(this.selctedIndex, 1);
     this.userList.unshift(userObj)
     this.customerForm.reset();
     this.selectedId = '';
     this.isUpdate = false;
   }

   bindRow(data:any) {
    console.log(data);
    this.customerForm.controls.firstName.setValue(data.data.firstName);
    this.customerForm.controls.lastName.setValue(data.data.lastName);
    this.customerForm.controls.dob.setValue(data.data.dob);
    this.customerForm.controls.number.setValue(data.data.number);
    this.customerForm.controls.email.setValue(data.data.email);
    this.selectedId = data.data.email._id;
    this.isUpdate = true;
    this.selctedIndex = data.index;
  }

  deleteUser(i:any):any {
    this.userList.splice(i, 1);
  }
  
  }