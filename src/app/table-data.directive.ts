import { Directive,Renderer2, ElementRef, } from '@angular/core';


@Directive({
  selector: '[appTableData]'
})
export class TableDataDirective {

  
  constructor(  private renderer: Renderer2,
    private el: ElementRef) {  
    
  }  
  ngAfterViewInit(): void {  
     
     
  
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');

  }     
}    

