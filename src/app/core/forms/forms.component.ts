import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { bloodGroup } from 'src/app/bloodGroup';
import { relevance } from 'src/app/relevance';
import { tshirt } from 'src/app/tshirt';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
// enum dropdown
  tshirt = tshirt;
  bloodgroup = bloodGroup;
  relevance= relevance;
//formgroup
  userForm: any;
  
  addressFormGroup: any = FormGroup;
  
   birthdate!: Date;
   age!: number;
  //  minDate: Date;
  //  maxDate: Date;
  constructor(private fb: FormBuilder) { 
    
    // const currentYear = new Date().getFullYear();
    // this.minDate = new Date(currentYear - 20, 12, 99);
    // console.log(this.minDate.toDateString());
    // this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  ngOnInit() {
    this.createUserForm();
  }
  createUserForm() {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({        
        employeeNumber: ['',  [Validators.required]],
        firstName: ['',  [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        middleName: ['',  [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        lastName: ['',  [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]]
  
      }),
      workInfo: this.fb.group({        
        department: ['',  [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
        location: ['',  [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
        workphone: ['',  [Validators.required]],
        salaryRevision: ['', Validators.required],
        dateOfJoining: ['', Validators.required]
      }),
      personalInfo: this.fb.group({        
        mobPhone: ['',  [Validators.required]],
        age: ['',  [Validators.required]],
        maritalStatus: ['',  [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        birthDate: ['',  [Validators.required]],
        tshirt: ['',  [Validators.required]],
        bloodGroup: ['',  [Validators.required]],
        tags: ['',  [Validators.required]]
      }),
      summaryInfo: this.fb.group({        
        jobDesc: ['',  [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
        aboutMe: ['',  [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        askMeExperties: ['',  [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
        presentAddress: ['',  [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
        residencePhone: ['',  [Validators.required]]
      }),
      'experienceInfo': this.fb.array([
        this.initForm()
      ])
  
    });
    this.addWorkExp();
  }
  
  initForm(): FormGroup {
    return this.fb.group({
      'previousCompanyName': ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      'jobTitle': ['', [Validators.required,  Validators.pattern(/^[a-zA-Z]+$/)]],
      'fromDate': ['', [Validators.required]],
      'toDate': ['', [Validators.required]],
      'jobDescription': ['', [Validators.required,  Validators.pattern(/^[a-zA-Z]+$/)]],
      'relevance': ['', [Validators.required]],  
  
    });
  }
  
  removeWorkExp(index:any) {
    console.log(index);
    (<FormArray>this.userForm.get("experienceInfo")).removeAt(index);
  }
  
  get f() { return this.userForm.controls; }
  
   addWorkExp(): void {
    console.log((<FormArray>this.userForm.get("experienceInfo")).length)
    if((<FormArray>this.userForm.get("experienceInfo")).valid) {
  
      const control = <FormArray>this.f.experienceInfo;
      control.push(this.initForm());
    }
  }
  
  
  saveDetails(value: any) {
    console.log(value);
    if(!this.userForm.valid) {
      this.userForm.markAllAsTouched();
    return;
  }}
  
  ageCalculator(){
    if(this.birthdate){
      const convertAge = new Date(this.birthdate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }



}

