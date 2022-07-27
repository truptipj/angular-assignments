import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmDialogService } from './confirm-dialog.service';



@NgModule({
  declarations: [
    ConfirmationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfirmationComponent
  ],
  providers:[
    ConfirmDialogService
  ]
})
export class SharedModule { }
