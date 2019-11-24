
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore'
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface DailyPayment{
  dpaymentdate:number;
  //dpaymenttime:number;
  dpaymenttitle:string;
  dpaymentdec:string;
  dpaymentAmount:number;

  
  // task:string;
  // priority:number;
  // createdAt:number;
}


@Injectable({
  providedIn: 'root'
})
export class DailyPaymentsService {
  private dailyPaymentCollection: AngularFirestoreCollection<DailyPayment>;
  private dailyPayments :Observable<DailyPayment[]>;
  constructor(db: AngularFirestore) {
    this.dailyPaymentCollection = db.collection<DailyPayment>('dailyPayments');
   
    
    this.dailyPayments = this.dailyPaymentCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
      );
   


 
  }

    getDailyPayments(){
      return this.dailyPayments;
    }

    getDailyPayment(id){
      return this.dailyPaymentCollection.doc<DailyPayment>(id).valueChanges();
//return this.todosCollection.doc<Todo>(id).valueChanges();

    }

    updateDailyPayment(dailyPayment:DailyPayment, id:string){
      return this.dailyPaymentCollection.doc(id).update(dailyPayment);
    }

    addDailyPayment(dailyPayment:DailyPayment){
      return this.dailyPaymentCollection.add(dailyPayment);
    }

    removeDailyPayment(id){
      return this.dailyPaymentCollection.doc(id).delete();
    }



}
