import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryService } from '../../service/grocery.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
 item={
   name:"",
   price:Number,
   type:""
 }
  constructor(private alert: AlertController, private serv: GroceryService) { }

  ngOnInit() {
  }
submit(){
  this.serv.post(this.item,this.alert);
}
}
