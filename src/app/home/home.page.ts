import { Component } from '@angular/core';
import { GroceryService } from '../service/grocery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
groceryList;
 item = {
  name:'',
  price:Number,
  type:''
}


  constructor(private grocery: GroceryService,private router:Router) {

this.groceryList = this.grocery.getItems();

  }
  goNext() {
    this.router.navigateByUrl("add-item")
  }
update(){
  this.grocery.update(this.item)
}
}
