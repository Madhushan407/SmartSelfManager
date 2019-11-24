import { Component, OnInit } from '@angular/core';
import { SpecialPayment, SpecialPaymentsService} from './../services/special-payments.service';

@Component({
  selector: 'app-special-payments',
  templateUrl: './special-payments.page.html',
  styleUrls: ['./special-payments.page.scss'],
})
export class SpecialPaymentsPage implements OnInit {

  specialPayments: SpecialPayment[];

 


  constructor(private specialPaymentService: SpecialPaymentsService) { }

  ngOnInit() {

    this.specialPaymentService.getSpecialPayments().subscribe(res =>{
      this.specialPayments =res;
    });

 /*   this.specialPaymentService.getMypayment().subscribe(res =>{
      this.specialPayments =res;
    });
*/
  }

  remove(item){
  //  this.todoService.removeTodo(item.id);
    this.specialPaymentService.removeSpecialPayment(item.id);
  }


}
