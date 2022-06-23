import { Directive, ElementRef, } from '@angular/core';


@Directive({
  selector: '[appTableData]'
})
export class TableDataDirective {
  constructor(private el : ElementRef){
    this.el.nativeElement.style.textDecoration = 'underline';
    this.el.nativeElement.style.textDecorationColor = 'black';
 
}   
 }

