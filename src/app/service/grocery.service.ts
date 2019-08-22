import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { post } from 'selenium-webdriver/http';
import { AngularFirestoreDocument } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  get windowRef(){
    return window
  }
  
  
  
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  firestore: any;
  list;
  writePost;

  private itemDoc: AngularFirestoreDocument<item>;

  
  constructor(private angularfirestore: AngularFirestore) { 
    
    
  }
  getSecItem()  {
    return this.angularfirestore.collection('grocery').snapshotChanges();

  }
post(item,alert){
  this.writePost = this.angularfirestore.collection<any>('grocery');
  this.writePost.add(item).then(() =>{

    console.log("successfully added");
  });
}

update(item, key){
  this.itemDoc = this.angularfirestore.doc<item>('grocery/'+ key);
  this.itemDoc.update(item);
}

delete(item, key) {
  //this.itemDoc = this.angularfirestore.doc<item>('Students/' + key)
  //this.itemDoc.delete();
  this.angularfirestore.doc('grocery/' + key).delete();
}



}







