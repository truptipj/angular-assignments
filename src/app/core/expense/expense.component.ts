import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpensesService } from '../../core/expenses.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenses:any = [];
  expenseForm: any;
  yearlist = [
    {'name' : 'January', 'total': 0},
    {'name' : 'February', 'total': 0},
    {'name' : 'March', 'total': 0},
    {'name' : 'April', 'total': 0},
    {'name' : 'May', 'total': 0},
    {'name' : 'June', 'total': 0},
    {'name' : 'July', 'total': 0},
    {'name' : 'August', 'total': 0},
    {'name' : 'September', 'total': 0},
    {'name' : 'October', 'total': 0},
    {'name' : 'November', 'total': 0},
    {'name' : 'December', 'total': 0},

  ]



  constructor(private expensesService: ExpensesService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      company:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
      category :['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
      date:['', Validators.required],
      amount:['', Validators.required],

     
    })
    this.getExpenseList();
  }

  addExpense() {

    if(this.expenseForm.valid){
      this.expensesService.saveExpense(this.expenseForm.value);
      this.getExpenseList();
    }
    this.expenseForm.reset();

  }
  getExpenseList(){
    this.expenses = this.expensesService.getExpense();
    this.yearlist.forEach((element, index) => {
      let i = index + 1;
      let ind = ('0' + i).slice(-2);
      element.total = this.expensesService.getExpenseTotalAmount(ind);
    });
  }
  deleteExpense(data:any){
    this.expensesService.delete(data);
    this.getExpenseList();
  } 
  getFiltedMonth(i:any){
    let ind = ('0' + i).slice(-2)
    this.expenses = this.expensesService.getExpenseByMonth(ind);
  }


}


