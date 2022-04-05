import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Books} from '../model/books';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any>{
    return this.http.get<any>(API_URL);
  }

  getBooks(id: number): Observable<any> {
    return this.http.get<any>(API_URL + id);
  }

  createBooks(books: Books): Observable<any> {
    return this.http.post<any>(API_URL, books);
  }

  editBooks(id: number, books: Books): Observable<any> {
    return this.http.put<any>(API_URL + id, books);
  }

  deleteBooks(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + id);
  }
}
