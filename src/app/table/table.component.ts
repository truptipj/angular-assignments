import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  display = true;
  constructor() { }

  ngOnInit(): void {
  }

  array = [

    {name:'Priya',lastName:'Patil',zip:'gitingore.zip',mobile:'9476893408'},

    {name:'Rishabh',lastName:'Jain',zip:'git.zip',mobile:'837856983759'},

    {name:'Manish',lastName:'Malhotra',zip:'vscode.zip',mobile:'9156985609'},

    {name:'Riya',lastName:'Kothari',zip:'src.zip',mobile:'8637838893'},

    {name:'Mukesh',lastName:'Patil',zip:'src.zip',mobile:'4672287387'},

    {name:'Saloni',lastName:'Deshmukh',zip:'src.zip',mobile:'4676878798'},

    {name:'Hiten',lastName:'Sharma',zip:'src.zip',mobile:'9145678987'},

    {name:'Hina',lastName:'Khan',zip:'src.zip',mobile:'7689565788'},

    {name:'Swati',lastName:'Karande',zip:'src.zip',mobile:'8456778899'},

    {name:'Reyansh',lastName:'Jadhav',zip:'src.zip',mobile:'9189798980'},

  ]

  show(){

    this.display = !this.display;

    return this.display;

  }

}
