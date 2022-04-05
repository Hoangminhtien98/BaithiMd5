import { Component, OnInit } from '@angular/core';
import {Books} from '../model/books';
import {BooksServiceService} from '../service/books-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {

  books: Books;
  id: number;

  constructor(private booksService: BooksServiceService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.booksService.getBooks(this.id).subscribe(books => this.books = books);
  }

}
