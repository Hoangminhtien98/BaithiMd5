import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { BooksAddComponent } from './books-add/books-add.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksEditComponent,
    BooksDetailComponent,
    BooksAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
