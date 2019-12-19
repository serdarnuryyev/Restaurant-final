import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Dish } from './models/dish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant';

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }
}
