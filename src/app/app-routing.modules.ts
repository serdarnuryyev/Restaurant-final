import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { DishAddComponent } from './dish-add/dish-add.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';


const routes: Routes = [
  { path: '', component: DishListComponent },
  { path: 'add', component: DishAddComponent },
  { path: 'list', component: DishListComponent },
  { path: 'detail/:id', component: DishDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

