import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../service/grocery.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
nme;
pri;
tpe;
ky;

itemList;

item={
key:'',
name:'',
price: Number,
type:''
}

  constructor(private route: ActivatedRoute,private grocery: GroceryService,private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    
 this.item.name = params.name;
 this.item.price = params.price;
 this.item.type = params.type;
 this.item.key = params.key;
 console.log(this.item.name,this.item.price,this.item.type,this.item.key)

  })
}
update(item, key){
  this.grocery.update(item, item.key),
  this.router.navigateByUrl('/home')

}

delete(item) {
  this.grocery.delete(item, item.key);
  this.router.navigateByUrl('/home')
}

}
