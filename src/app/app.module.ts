import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ckeditor4-angular';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.modules';
import {  MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatRadioModule, MatIconModule, MatTableModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { DishAddComponent } from './dish-add/dish-add.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DishAddComponent,
    DishListComponent,
    DishDetailComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatBadgeModule,
    CKEditorModule,
    MatIconModule,
    MatRadioModule,
    FlexLayoutModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
