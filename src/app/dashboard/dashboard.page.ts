import { Component, OnInit } from '@angular/core';
import { SpecialPayment, SpecialPaymentsService} from './../services/special-payments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  totalSpecialPaymentAnount: number;



  

  constructor(private specialPaymentService: SpecialPaymentsService) {

    
   }

   public payname:string;

  ngOnInit() {
   // this.totalSpecialPaymentAnount = this.specialPaymentService.getTotalSpecialAmount();
   this.totalSpecialPaymentAnount = 12;
   this.payname=this.totalSpecialPaymentAnount.toString();
   
  }

// public payname='0';
  //public payname=this.totalSpecialPaymentAnount.toString();


  

  public amounts = [ {
    income: this.payname,
    daily: '23',
    special: '22'
  }];

  showTotalSpecial(){

  }

}
