import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryService } from '../../service/grocery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  groceryList;
 itemList={
   name:'',
   price:'',
   type:'',
 }
  constructor(private alert: AlertController, private serv: GroceryService,private router: Router) { }

  ngOnInit() {
  }
submit(){
  this.serv.post(this.itemList,this.alert);
  this.router.navigateByUrl("home")
  
  this.itemList.name=''
  this.itemList.price=''
  this.itemList.type=''
  
}
}
