import { Component, OnInit } from '@angular/core';
import {Books} from '../model/books';
import {BooksServiceService} from '../service/books-service.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  booksList: Books[] = [];
  message: string;
  books: Books;

  constructor(private booksService: BooksServiceService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  // tslint:disable-next-line:typedef
  getAllBooks(){
    this.booksService.getAllBooks().subscribe(booksList => {this.booksList = booksList; });
  }

  // tslint:disable-next-line:typedef
  deleteBooks(id: number, name: string){
    if (confirm('Bạn muốn xóa cuốn sách: ' + name)) {
      // @ts-ignore
      this.booksService.deleteBooks(id).subscribe(() => this.booksList = this.getAllBooks());
      this.message = 'Xóa thành công cuốn sách: ' + name;
    }
  }

}
