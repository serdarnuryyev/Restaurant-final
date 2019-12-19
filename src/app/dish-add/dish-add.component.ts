import { Component, OnInit } from '@angular/core';
import { Dish } from '../models/dish';
import { HttpClient } from '@angular/common/http';
import { DishService } from '../dish.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dish-add',
  templateUrl: './dish-add.component.html',
  styleUrls: ['./dish-add.component.css']
})
export class DishAddComponent implements OnInit {



  dish: Dish = {
    title: '',
    disc: '',
    price: null,
  };
  imagePreview: any;
  image;

  constructor(private http: HttpClient, public dishservice: DishService, private router: Router) { }



  ngOnInit() {
  }

  addDish() {
    this.dishservice.addDish(this.dish);
    this.dish = {
      title: '',
      disc: '',
      price: null
    };
    this.router.navigate(['/list']);
    
  }

  onImagePicked(event) {
    const file = event.target.files[0];
    console.log(file);
    this.dish.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }
}
