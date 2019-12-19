import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DishService } from '../dish.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Dish } from '../models/dish';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;
  dishId;

  constructor(private http: HttpClient, public dishservice: DishService, private router: Router, private route: ActivatedRoute, public cartService: CartService) { }

  ngOnInit() {
    this.dishId = this.route.params.subscribe(params => {
      this.dishservice.getDish(params['id']).subscribe((dish: Dish) => {

        this.dish = dish;
        console.log(this.dish);

      });
    });
  }

  addToCart(dish) {
    this.cartService.addToCart(dish);
  }

}
