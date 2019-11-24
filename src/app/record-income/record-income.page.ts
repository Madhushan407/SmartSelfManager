import { Component, OnInit } from '@angular/core';
import { IncomeRecord, IncomeRecordsService } from './../services/income-records.service';

@Component({
  selector: 'app-record-income',
  templateUrl: './record-income.page.html',
  styleUrls: ['./record-income.page.scss'],
})
export class RecordIncomePage implements OnInit {

  incomeRecords: IncomeRecord[];


  constructor(private incomeRecordService: IncomeRecordsService) { }

  ngOnInit() {
    this.incomeRecordService.getIncomeRecords().subscribe(res =>{
      this.incomeRecords =res;
    });

  }

  remove(item){
  //  this.todoService.removeTodo(item.id);
    this.incomeRecordService.removeIncomeRecord(item.id);
  }


  

}
