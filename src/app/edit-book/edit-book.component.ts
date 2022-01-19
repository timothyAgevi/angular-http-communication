import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { DataService } from 'app/core/data.service';
import { OldBook } from 'app/models/oldBook';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;
  http: any;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
     this.dataService.getBookById(bookID).subscribe(
       (data:Book)=>this.selectedBook=data,
       (err:any)=>console.log(err)
     );

     this.dataService.getOldBookById(bookID)
     .subscribe(
      (data:OldBook)=> console.log(`Old Book Title : ${data.bookTitle}`)
    
      )}

      addBook(newBook:Book):Observable<Book>{
        return this.http.post
      }


  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
  }

  saveChanges(): void {
    console.warn('Save changes to book not yet implemented.');
  }
}
