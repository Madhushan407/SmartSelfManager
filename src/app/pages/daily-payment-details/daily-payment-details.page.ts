
import { Component, OnInit } from '@angular/core';
import { DailyPayment,DailyPaymentsService} from 'src/app/services/daily-payments.service';
import { ActivatedRoute } from '@angular/router';
import{ LoadingController, NavController } from '@ionic/angular'


@Component({
  selector: 'app-daily-payment-details',
  templateUrl: './daily-payment-details.page.html',
  styleUrls: ['./daily-payment-details.page.scss'],
})
export class DailyPaymentDetailsPage implements OnInit {
  
    
   
  dailyPayment: DailyPayment ={
    dpaymentdate: new Date().getTime(),
    dpaymenttitle:'',
    dpaymentdec:'',
    dpaymentAmount:0

  }

  dailyPaymentId =null;

  

  constructor(private dailyPaymentService: DailyPaymentsService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController) { }

  ngOnInit() {
    this.dailyPaymentId = this.route.snapshot.params['id'];
    if(this.dailyPaymentId){
      this.loadDailyPayment();
    }
  }

  async loadDailyPayment(){
    const loading =await this.loadingController.create({
      message:'Loading Todo..',
      spinner: 'crescent',
      duration: 1000
    });
    await loading.present();
    this.dailyPaymentService.getDailyPayment(this.dailyPaymentId).subscribe(res=>{
     loading.dismiss();
      this.dailyPayment = res;
    })
  }


  async saveDailyPayment(){
    const loading =await this.loadingController.create({
      message:'saving Todo..',
      spinner: 'crescent',
      duration: 1000  
    });

    await loading.present();

    if(this.dailyPaymentId){
      this.dailyPaymentService.updateDailyPayment(this.dailyPayment, this.dailyPaymentId).then(()=>{
        loading.dismiss();
        this.nav.navigateBack('daily-payments');
      });
    }else{
      this.dailyPaymentService.addDailyPayment(this.dailyPayment).then(()=>{
        loading.dismiss();
        this.nav.navigateBack('daily-payments');
      });
    }
  }


}
