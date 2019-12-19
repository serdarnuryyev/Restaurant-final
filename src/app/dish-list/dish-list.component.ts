import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { CartService } from '../cart.service';
import { Dish } from '../models/dish';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  constructor(public dishService: DishService, public cartService: CartService) { }

  dishes: Dish[]=[];


  ngOnInit() {
    this.dishService.updateDishList();

  }

  deleteDish(dish) {
    this.dishService.deleteDish(dish).subscribe(() => {
      this.dishService.updateDishList();
    });
  }

  addToCart(dish) {
    this.cartService.addToCart(dish);
  }
}
