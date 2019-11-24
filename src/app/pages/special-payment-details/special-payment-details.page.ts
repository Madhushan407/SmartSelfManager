import { Component, OnInit } from '@angular/core';
import { SpecialPayment,SpecialPaymentsService} from 'src/app/services/special-payments.service';
import { ActivatedRoute } from '@angular/router';
import{ LoadingController, NavController } from '@ionic/angular'
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-special-payment-details',
  templateUrl: './special-payment-details.page.html',
  styleUrls: ['./special-payment-details.page.scss'],
})
export class SpecialPaymentDetailsPage implements OnInit {
  
  
  specialPayment: SpecialPayment ={
   // spaymentdate: new Date().getTime(),
    //spaymenttime: new Date().getTime(),
    spaymentdate: new Date().getTime(),
    spaymenttime: new Date().getTime(),
    spaymenttitle:'',
    spaymentdec:'',
    spaymentAmount:0
//myDate:any  = new Date().toISOString();

  }

  specialPaymentId =null;

  

  constructor(private specialPaymentService: SpecialPaymentsService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController) { }

  ngOnInit() {
  //  specialPayment.spaymentdate: new Date().getTime(),
    //spaymenttime: new Date().getTime(),

  //  this.specialPayment.spaymentdate = new Date().getDate();
    //this.specialPayment.spaymenttime = new Date().getTime();

    this.specialPaymentId = this.route.snapshot.params['id'];
    if(this.specialPaymentId){
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
    this.specialPaymentService.getSpecialPayment(this.specialPaymentId).subscribe(res=>{
     loading.dismiss();
      this.specialPayment = res;
    })
  }


  async saveSpecialPayment(){
    const loading =await this.loadingController.create({
      message:'saving Special Payment..',
      spinner: 'crescent',
      duration: 1000  
    });

    await loading.present();

    if(this.specialPaymentId){
      this.specialPaymentService.updateSpecialPayment(this.specialPayment, this.specialPaymentId).then(()=>{
        loading.dismiss();
        this.nav.navigateBack('special-payments');
      });
    }else{
      this.specialPaymentService.addSpecialPayment(this.specialPayment).then(()=>{
        loading.dismiss();
        this.nav.navigateBack('special-payments');
      });
    }
  }

}
