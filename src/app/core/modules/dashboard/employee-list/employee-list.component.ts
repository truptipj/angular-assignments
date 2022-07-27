import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ConfirmDialogService } from 'src/app/shared/confirm-dialog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  selectedID: any;
  displayLoader=true;
  employeeList: any = [];

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private confirmDialogService:ConfirmDialogService
  ) {
    this.confirmDialogService.getConfirmMessage().subscribe((message) => {
      this.deleteEmployee(this.selectedID);
    });
  }
  ngOnInit(): void {
    this.getEmployeeList();
  }

  
  getEmployeeList() {
    this.displayLoader= true;
    setTimeout(() => {
      this.employeeService.getEmployee().subscribe((res: any) => {
        this.employeeList = res.result;
        this.displayLoader= false;
      });
  }, 1000);
  }


  checkDelete(id: number) {
    this.selectedID = id;
    this.confirmDialogService.confirmThis('Are you sure to delete?');
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      this.getEmployeeList();
    });
  }

  bindRow(obj: any) {
    localStorage.setItem('userObj', JSON.stringify(obj))
    this.router.navigate(['admin/dashboard/update-employee']);
  }

  openForm(){
    this.router.navigate(['admin/dashboard/add-employee']);
  }
  
}

// {"id":"1144","firstName":"tj","lastName":"jd","workPhone":"76878990808","mobileNumber":"78979809899","bloodGroup":"a+","jobDesc":"angular","expertise":"html","aboutme":"hardworking","location":"pune","department":"software","joiningDate":"2022-07-14","salaryRevisionDate":"2022-07-31","isActive":"yes","createdAt":"pune","createdBy":"shruti","updatedAt":"incub","updatedBy":"riya"}
// {"id":337,"firstName":"Balaaaji","lastName":"Manusured","workPhone":null,"mobileNumber":"","bloodGroup":"","jobDesc":"","expertise":null,"aboutme":"","location":"","department":"1","profileImage":null,"joiningDate":"2022-07-27T00:00:00","salaryRevisionDate":null,"isActive":true,"createdBy":null,"createdAt":null,"updatedBy":"","updatedAt":"2022-07-07T17:51:21.8743773"},{"id":338,"firstName":"Balaji","lastName":"Bhau","workPhone":null,"mobileNumber":"6778900332","bloodGroup":"1","jobDesc":"No","expertise":null,"aboutme":"Nothing","location":"Pune","department":"2","profileImage":null,"joiningDate":"2022-07-27T00:00:00","salaryRevisionDate":null,"isActive":true,"createdBy":"","createdAt":"2022-07-07T16:55:16.4134884","updatedBy":"","updatedAt":"2022-07-07T16:55:16.4135995"},{"id":339,"firstName":"Balaji","lastName":"chg","workPhone":null,"mobileNumber":"6778900332","bloodGroup":"1","jobDesc":"No","expertise":null,"aboutme":"Nothing","location":"Pune","department":"2","profileImage":null,"joiningDate":"2022-07-27T00:00:00","salaryRevisionDate":null,"isActive":true,"createdBy":"","createdAt":"2022-07-07T16:56:05.0471911","updatedBy":"","updatedAt":"2022-07-07T16:56:05.0471917"}],"message":null}
