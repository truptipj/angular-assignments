import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class ExpensesService {


  expenseList:any = [];

  constructor() { }

  saveExpense(data:any) {
    this.expenseList.unshift(data);
  }
  getExpense() {
      return this.expenseList;
  }
  delete(data:any){
    this.expenseList.splice(this.expenseList.findIndex((obj:any)=>{
      return obj.name === data.name;
  }), 1);
  }
  getExpenseByMonth(month:any) {
    if(this.expenseList.length > 0){
      return this.expenseList.filter((element:any) => {
        return element.month == month;
      })
    }
}

getExpenseTotalAmount(month: any) {
  if (this.expenseList.length > 0) {
    let filteredMonth = this.expenseList.filter((element: any) => {return element.month == month});
    return filteredMonth.reduce((sum:any, current:any) => {
      return sum + current.amount;
    }, 0)
  }
}
}
