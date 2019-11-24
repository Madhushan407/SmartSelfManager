import { Component, OnInit } from '@angular/core';
import { DailyPayment, DailyPaymentsService } from './../services/daily-payments.service';

@Component({
  selector: 'app-daily-payments',
  templateUrl: './daily-payments.page.html',
  styleUrls: ['./daily-payments.page.scss'],
})
export class DailyPaymentsPage implements OnInit {

  dailyPayments: DailyPayment[];


  constructor(private dailyPaymentService: DailyPaymentsService) { }

  ngOnInit() {
    this.dailyPaymentService.getDailyPayments().subscribe(res =>{
      this.dailyPayments =res;
    });

  }

  remove(item){
  //  this.todoService.removeTodo(item.id);
    this.dailyPaymentService.removeDailyPayment(item.id);
  }





//todos: Todo[];
  //constructor(private todoService:TodoService) {}

  // ngOnInit(){
  //   this.todoService.getTodos().subscribe(res =>{
  //     this.todos =res;
  //   });
  // }

 
  

}
