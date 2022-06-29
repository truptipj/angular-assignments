import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  expenseList: any = [];

  constructor() { }

  saveExpense(data: any) {
    this.expenseList.unshift(data);
  }
  getExpense() {
    return this.expenseList;
  }
  delete(data: any) {
    this.expenseList.splice(this.expenseList.findIndex((obj: any) => {
      return obj.name === data.name;
    }), 1);
  }
  getExpenseByMonth(i: any) {
    if (this.expenseList.length > 0) {
      return this.expenseList.filter((element: any) => {
        return element.date.substring(5, 7) === i;
      })
    }
  }
  getExpenseTotalAmount(i: any) {
    if (this.expenseList.length > 0) {
      let filteredMonth = this.expenseList.filter((element: any) => {return element.date.substring(5, 7) === i;});
      return filteredMonth.reduce((sum: any, current: any) => {
        return sum + current.amount;
      }, 0)
    }
  }
}