import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartComponent } from './components/start/start.component';
import { BooksComponent } from './components/books/books.component';
import { BooksSpecificationComponent } from './components/books-specification/books-specification.component';

@NgModule({
  declarations: [		
    AppComponent,
    StartComponent,
    NotFoundComponent,
    AboutComponent,
    BooksComponent,
    BooksSpecificationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
