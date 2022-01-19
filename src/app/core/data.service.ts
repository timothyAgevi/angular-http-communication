import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { BookTrackerError } from 'app/models/bookTrackerError';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks():Observable <Book[]> {
    console.log('Get all books')
    return this.http.get<Book[]>('/api/books');
  }
//geting single book
  getBookById(id: number):Observable<Book> {
    let getHeaders:HttpHeaders=new HttpHeaders({
      'Accept':'application/json',
      'Authorization':'my-token'
    });
    return this.http.get<Book>(`/api/books/${id}`);
  }  
}
