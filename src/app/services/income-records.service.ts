import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore'
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IncomeRecord{
  incomedate:number;
  incometitle:string;
  incomedec:string;
  incomeAmount:number;

}


@Injectable({
  providedIn: 'root'
})
export class IncomeRecordsService {

  private incomeCollection: AngularFirestoreCollection<IncomeRecord>;
  private incomeRecords :Observable<IncomeRecord[]>;
  constructor(db: AngularFirestore) {
    this.incomeCollection = db.collection<IncomeRecord>('incomeRecords');
   
    
    this.incomeRecords = this.incomeCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
      );
   


 
  }

    getIncomeRecords(){
      return this.incomeRecords;
    }

    getIncomeRecord(id){
      return this.incomeCollection.doc<IncomeRecord>(id).valueChanges();
//return this.todosCollection.doc<Todo>(id).valueChanges();

    }

    updateIncomeRecord(incomeRecord:IncomeRecord, id:string){
      return this.incomeCollection.doc(id).update(incomeRecord);
    }

    addIncomeRecord(incomeRecord:IncomeRecord){
      return this.incomeCollection.add(incomeRecord);
    }

    removeIncomeRecord(id){
      return this.incomeCollection.doc(id).delete();
    }

}
