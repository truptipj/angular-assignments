import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpensesService } from './expenses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  expenses:any = [];
  expenseForm: any;
  janTotal:number = 0;
  febTotal:number = 0;
  marTotal:number = 0;
  aprTotal:number = 0;
  mayTotal:number = 0;
  juneTotal:number = 0;
  julyTotal:number = 0;
  augTotal:number = 0;
  sepTotal:number = 0;
  octTotal:number = 0;
  novTotal:number = 0;
  decTotal:number = 0;

  @ViewChild('myModalClose') myModalClose:any;


  constructor(private expensesService: ExpensesService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      company:['', Validators.required],
      category:['', Validators.required],
      date:['', Validators.required],
      amount:['', Validators.required],

    })
    this.getExpenseList();
  }

  addExpense() {

    
      this.myModalClose.nativeElement.click();
    let reqObj:any = {};
    reqObj = this.expenseForm.value;
    let month = (this.expenseForm.value.date.substring(5, 7));
    var monthInText;
    if(month === '01') {
      monthInText = 'Jan'
    };
    if(month === '02') {
      monthInText = 'Feb'
    }
    if(month === '03') {
      monthInText = 'Mar'
    }
    if(month === '04') {
      monthInText = 'Apr'
    }
    if(month === '05') {
      monthInText = 'May'
    }
    if(month === '06') {
      monthInText = 'June'
    }
    if(month === '07') {
      monthInText = 'July'
    }
    if(month === '08') {
      monthInText = 'Aug'
    }
    if(month === '09') {
      monthInText = 'Sep'
    } if(month === '10') {
      monthInText = 'Oct'
    }
    if(month === '11') {
      monthInText = 'Nov'
    }
    if(month === '12') {
      monthInText = 'Dec'
    }
    reqObj.month = monthInText;
    console.log(month);
    this.expensesService.saveExpense(this.expenseForm.value);
    this.getExpenseList();
    this.expenseForm.reset();    
    
  
  }
  getExpenseList(){
    this.expenses = this.expensesService.getExpense();
    this.janTotal = this.expensesService.getExpenseTotalAmount('Jan')
    this.febTotal = this.expensesService.getExpenseTotalAmount('Feb');
    this.marTotal = this.expensesService.getExpenseTotalAmount('Mar');
    this.aprTotal = this.expensesService.getExpenseTotalAmount('Apr');
    this.mayTotal = this.expensesService.getExpenseTotalAmount('May');
    this.juneTotal = this.expensesService.getExpenseTotalAmount('June');
    this.julyTotal = this.expensesService.getExpenseTotalAmount('July');
    this.augTotal = this.expensesService.getExpenseTotalAmount('Aug');
    this.sepTotal = this.expensesService.getExpenseTotalAmount('Sep');
    this.octTotal = this.expensesService.getExpenseTotalAmount('Oct');
    this.novTotal = this.expensesService.getExpenseTotalAmount('Nov');
    this.decTotal = this.expensesService.getExpenseTotalAmount('Dec');

  }
  deleteExpense(data:any){
    this.expensesService.delete(data);
    this.getExpenseList();
  }
  getFiltedMonth(month:any){
    this.expenses = this.expensesService.getExpenseByMonth(month);
  }


}


































// export class AppComponent {
//   title = 'Expensify';



//   openPopup() {
//     this.displayStyle = "block";
//   }
//   closePopup() {
//     this.displayStyle = "none";
//   }




//   displayStyle = "none";
//   ExpensesService: any;

  
//   customerForm:any;


//   customerList: any=[];


//   // expenses: { company: String; category: String; date: any; amount: any} []=[];
//  constructor(private fb:FormBuilder,private expensesService: ExpensesService) { }
//  ngOnInit(): void {



//   // this.expenses= this.expensesService.expenses;



//    this.customerForm = this.fb.group({
//      company: [''],
//      category: [''],
//      date: [''],
//      amount: ['']
//    });

   
   

//  }
//  get customerFormControl() { return this.customerForm.controls; }
//  addData() {
//   //  this.ExpensesService.setData(this.customerForm.value);
//    this.customerList.push(this.customerForm.value)
//    console.log(this.customerForm.value);
//  }




// delete(data:any, ind:any) {
//   this.customerList.splice(ind, 1);
// }


// }








// @Component({
//   selector: 'app-expens-list',
//   templateUrl: './expens-list.component.html',
//   styleUrls: ['./expens-list.component.css']
// })









