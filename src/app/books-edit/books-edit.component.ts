import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Books} from '../model/books';
import {BooksServiceService} from '../service/books-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  id: number;
  newUserForm: FormGroup;
  message = '';
  books: Books;

  constructor(private formBuilder: FormBuilder,
              private booksService: BooksServiceService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.newUserForm = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        author: ['', [Validators.required]],
        description: ['', [Validators.required]],
      });

    this.booksService.getBooks(this.id).subscribe(books => {
      this.books = books;
      this.newUserForm.patchValue(books);
    });
  }

  // tslint:disable-next-line:typedef
  editBooks() {
    this.newUserForm.value.id = this.books.id;
    this.booksService.editBooks(this.id, this.newUserForm.value).subscribe(() => {
      this.message = 'Cập nhật thành công!';
      this.books = this.newUserForm.value;
    });
  }

}
