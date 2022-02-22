import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Book } from 'src/app/models/book';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-books-specification',
  templateUrl: './books-specification.component.html',
  styleUrls: ['./books-specification.component.css']
})
export class BooksSpecificationComponent implements OnInit {

  book1: Book | undefined;

  constructor(private route: ActivatedRoute, private library: LibraryService) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.library.getBookById(+param['id']).subscribe( (book) => {
        this.book1 = book;
      });
    });
  }
}
