import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore'
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { equal } from 'assert';

export interface SpecialPayment{
  spaymentdate:number;
  spaymenttime:number;
  spaymenttitle:string;
  spaymentdec:string;
  spaymentAmount:number;
}


@Injectable({
  providedIn: 'root'
})
export class SpecialPaymentsService {

  private specialPaymentCollection: AngularFirestoreCollection<SpecialPayment>;
  private specialPayments :Observable<SpecialPayment[]>;

  
//
private mypayment:Observable<SpecialPayment[]>;
//

//
private totalspecial:number;
//

  constructor(db: AngularFirestore) {
  //  this.specialPaymentCollection = db.collection<SpecialPayment>('specialPayments');
    this.specialPaymentCollection = db.collection<SpecialPayment>('specialPayments');
   
    
    this.specialPayments = this.specialPaymentCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
      );
   
  //   todaytime: new Date(2010-12-01);
     ///
    // this.mypayment = db.collection<SpecialPayment> ( "specialPayments" , ref => ref.where ( 'spaymentAmount' , '==' , 50) ).valueChanges ();
     this.mypayment = db.collection<SpecialPayment>("specialPayments" , ref => ref.where ( 'spaymentAmount' , '==' , 50) ).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
      );




      let num = this.specialPayments;
      num.forEach(function(){
        this.totalspecial =this.totalspecial + this.specialPayments.spaymentAmount;
      });





     //




 
 
  }


  getTotalSpecialAmount(){
   // return this.totalspecial;
   return 10;
  }


  ///

  //private mydata
getMypayment(){
 
return this.mypayment;
}
  ///

    getSpecialPayments(){
      return this.specialPayments;
    }

    getSpecialPayment(id){
      return this.specialPaymentCollection.doc<SpecialPayment>(id).valueChanges();
//return this.todosCollection.doc<Todo>(id).valueChanges();

    }

    updateSpecialPayment(specialPayment:SpecialPayment, id:string){
      return this.specialPaymentCollection.doc(id).update(specialPayment);
    }

    addSpecialPayment(specialPayment:SpecialPayment){
      return this.specialPaymentCollection.add(specialPayment);
    }

    removeSpecialPayment(id){
      return this.specialPaymentCollection.doc(id).delete();
    }

}
