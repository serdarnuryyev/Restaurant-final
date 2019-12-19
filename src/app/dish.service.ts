import { Injectable } from '@angular/core';
import { Dish } from './models/dish';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  dishes: Dish[] = [];
  constructor(private http: HttpClient,private toastr: ToastrService) { }

  addDish(dish) {
    const dishData = new FormData();
    dishData.append("title", dish.title);
    dishData.append("disc", dish.disc);
    dishData.append("price", dish.price);
    dishData.append("image", dish.image);
    this.http.post<{ message: string, dish: Dish }>('http://localhost:3000/api/dish', dishData)
      .subscribe((res) => {

        const resdish = res.dish;
        this.toastr.success('Added');
        this.dishes.push(resdish);
        this.updateDishList();
      });
  }



  deleteDish(dish) {
    return this.http.delete(`http://localhost:3000/api/dish/${dish._id}`);
  }

  getDish(id){
    return this.http.get(`http://localhost:3000/api/dish/${id}`);
  }



  getDishes() {
    return this.http.get(`http://localhost:3000/api/dish/`)
  }

  updateDishList() {
    this.getDishes().subscribe((dishslist: Dish[]) => {
      this.dishes = dishslist['Dishes'];
      console.log(this.dishes);
    });
  }
}

