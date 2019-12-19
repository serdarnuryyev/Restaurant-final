import { Component, OnInit} from '@angular/core';
import { DishService } from '../dish.service';
import { CartService } from '../cart.service';
import { Dish } from '../models/dish';
import { Router } from '@angular/router';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  contact = { name: "", tel: "", email:"" };
  constructor(public dishService: DishService, public cartService: CartService, private router: Router) { }

  dishes: Dish[]=[];


  ngOnInit() {
    this.cartService.updateCartList();
  }

  deleteDish(dish){
    this.cartService.deleteFromCart(dish);
  }

  addToCart(dish) {
    this.cartService.addToCart(dish);
    console.log("before open");
  }

  submitOrder() {
  console.log("submit order");
    this.cartService.submitOrder(this.contact);
    this.router.navigate(['/list']);
  }
}
