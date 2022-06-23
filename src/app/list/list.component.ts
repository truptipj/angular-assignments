import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: any = [];
  @Output() updateRow = new EventEmitter();
  @Output() deleteRow = new EventEmitter();

  selctedIndex:any;

  constructor() { }

  ngOnInit() {
  }
  edit(data:any, ind:any) {
    this.selctedIndex = ind;
    let userObj = {
      'data': data,
      'index': ind
    }
    this.updateRow.emit(userObj);
  }
  delete(ind:any) {
    this.deleteRow.emit(ind);
  }


}
