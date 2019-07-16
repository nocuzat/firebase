import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  write

  constructor(private angularfirestore: AngularFirestore) { }
  getItems(){
  return this.angularfirestore.collection('grocery').valueChanges();
  }


post(item,alert){
  this.angularfirestore.collection<any>('grocery');
  this.write = this.angularfirestore.collection<any>('grocery');
  this.write.add(item).the(() =>{
    console.log(item)
  })
}
}