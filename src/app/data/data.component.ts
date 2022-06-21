import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  age: any;
  showAge: any;

  firstName :string  = "";
  lastName :string  = "";
  email :string  = "";
  userName = "";


  constructor() { }

  ngOnInit() {
  }
  ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }
  clickMe(){  window.alert('First Name = ' + this.firstName +", "+ 'Last Name = '+ this.lastName+" , " + 'User Name = ' + this.userName +" , "+ 'Email = ' + this.email);
  

  }
  
}
