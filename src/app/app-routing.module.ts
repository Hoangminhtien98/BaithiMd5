import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksAddComponent} from './books-add/books-add.component';
import {BooksEditComponent} from './books-edit/books-edit.component';
import {BooksDetailComponent} from './books-detail/books-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: 'create',
    component: BooksAddComponent
  },
  {
    path: ':id',
    component: BooksEditComponent
  },
  {
    path: 'details/:id',
    component: BooksDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
