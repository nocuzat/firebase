import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { post } from 'selenium-webdriver/http';
import { AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  
  private itemDoc: AngularFirestoreDocument<item>;

  write
  
  constructor(private angularfirestore: AngularFirestore) { }
  getItems(){
  return this.angularfirestore.collection('grocery').valueChanges();
  }


post(item,alert){
  this.angularfirestore.collection<any>('grocery');
  //this.write = this.angularfirestore.collection<any>('grocery');
  this.angularfirestore.collection<any>('grocery').add(item).then(() =>{
    console.log()
  })
}

update(item){
  item.name="Colgate"
  item.price="25"
  item.type="toiletries"
  this.itemDoc = this.angularfirestore.doc<item>('grocery/1G2eGslgHZ9NMOiWR8Rv');
  this.itemDoc.update(item);
}
}