import { Component } from '@angular/core';
import { GroceryService } from '../service/grocery.service';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
groceryList;
 itemList;
 key: any;
  name:any;
  price:any;
  type:any;



  constructor(private grocery: GroceryService,private router:Router) {

//this.groceryList = this.grocery.getItems();


  this.grocery.getSecItem().subscribe(data => {
      
     this.itemList = data.map ( e => {
       return{
         key: e.payload.doc.id,
         ...e.payload.doc.data()
       } as item;
     });
     console.log(this.itemList);
    })
    }





  goNext() {
    this.router.navigateByUrl("add-item")
  }
//update(){
  //this.grocery.update(this.itemList)
  //this.router.navigateByUrl("edit")
  
//}

onSelect(item){
  this.router.navigate(['/edit'], { queryParams: {key:item.key,name: item.name,price:item.price,type:item.type} });
}

signOut(){
//firebase.auth().signOut().then(function() {
  this.router.navigateByUrl("login")
  // Sign-out successful.
//}).catch(function(error) {
  // An error happened.
//});
}

}
