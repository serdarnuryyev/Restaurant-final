import { Injectable } from '@angular/core';
import { Dish } from './models/dish';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  dishes: Dish[] = [];
  constructor(private http: HttpClient) { }

  addToCart(dish) {
    this.http.post<{ message: string, dish: Dish }>('http://localhost:3000/api/cart', dish).subscribe((res) => {
        console.log(res);
      });
    console.log(dish);
  }

  cartSize() {
      return this.dishes.length;
  }

  deleteFromCart(dish) {
    console.log("dish: ", dish);
    this.http.delete('http://localhost:3000/api/cart', dish).subscribe((res) => {
      console.log("res: ", res);
      this.dishes = res['Dishes'];
    });
  }

  calculateTotal() {
    return this.dishes.reduce((sum,dish)=>sum + dish.price, 0);
  }

  getCart() {
    return this.http.get(`http://localhost:3000/api/cart/`)
  }
  
  updateCartList() {
    this.getCart().subscribe((dishslist: Dish[]) => {
      this.dishes = dishslist['Dishes'];
      console.log(this.dishes);
    });
  }

  submitOrder(contact){
    const orderData = {"contact": contact, "dishes": this.dishes};
    console.log("SEND ORDER" + orderData);
    this.http.post('http://localhost:3000/api/order', orderData)
      .subscribe((res) => {

        console.log("SEND ORDER" + res);
      });
   }
}

