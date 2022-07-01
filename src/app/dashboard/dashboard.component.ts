import { Component, OnInit } from '@angular/core';
import { WebService } from '../servises/web.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isConnected = true;  
  noInternetConnection: any;  
  
  constructor(private webService: WebService ) {  
    // this.connectionService.monitor().subscribe((isConnected: boolean) => {  
    //   this.isConnected = isConnected;  
    //   if (this.isConnected) {  
    //     this.noInternetConnection=false;  
    //   }  
    //   else {  
    //     this.noInternetConnection=true;  
    //   }  
    // })  
  }  
  ngOnInit(): void {
    
  }
}  