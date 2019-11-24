import { Component, OnInit } from '@angular/core';
import { IncomeRecord,IncomeRecordsService} from 'src/app/services/income-records.service';
import { ActivatedRoute } from '@angular/router';
import{ LoadingController, NavController } from '@ionic/angular'

@Component({
  selector: 'app-income-record-details',
  templateUrl: './income-record-details.page.html',
  styleUrls: ['./income-record-details.page.scss'],
})
export class IncomeRecordDetailsPage implements OnInit {

  incomeRecord: IncomeRecord = {
    incomedate: new Date().getTime(),
    incometitle:'',
    incomedec:'',
    incomeAmount:0
  }

  incomeRecordId =null;

  constructor(private incomeRecordService: IncomeRecordsService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController) { }

  ngOnInit() {
    this.incomeRecordId = this.route.snapshot.params['id'];
    if(this.incomeRecordId){
      this.loadIncomeReport();
    }
  }

  async loadIncomeReport(){
    const loading =await this.loadingController.create({
      message:'Loading Todo..',
      spinner: 'crescent',
      duration: 1000
    });
    await loading.present();
    this.incomeRecordService.getIncomeRecord(this.incomeRecordId).subscribe(res=>{
     loading.dismiss();
      this.incomeRecord = res;
    })
  }

  async saveIncomeReport(){
    const loading =await this.loadingController.create({
      message:'saving Income..',
      spinner: 'crescent',
      duration: 1000  
    });

    await loading.present();

    if(this.incomeRecordId){
      this.incomeRecordService.updateIncomeRecord(this.incomeRecord, this.incomeRecordId).then(()=>{
        loading.dismiss();
        this.nav.navigateBack('record-income');
      });
    }else{
      this.incomeRecordService.addIncomeRecord(this.incomeRecord).then(()=>{
        loading.dismiss();
        this.nav.navigateBack('record-income');
      });
    }
  }

}
