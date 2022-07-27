import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../confirm-dialog.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  message: any;

  constructor(private confirmDialogService: ConfirmDialogService) {}

  ngOnInit(): any {
    this.confirmDialogService.getMessage().subscribe((message) => {
      this.message = message;
    });
  }

  confirm(isConfirmed:any) {
    this.message = '';
    if(isConfirmed) {
      this.confirmDialogService.confirmDelete();
    }
  }
}
