import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BooksSpecificationComponent } from './components/books-specification/books-specification.component';
import { BooksComponent } from './components/books/books.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartComponent } from './components/start/start.component';
import { ResolveBookService } from './services/resolveBook.service';

const routes: Routes = [
  {
    path:'',
    component: StartComponent
  },
  {
    path:'books',
    component: BooksComponent,
    children:[
      {
        path: ':id',
        component: BooksSpecificationComponent,
        // resolve:{
        //   book: ResolveBookService
        // }
      }
    ]
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'not-found',
    component: NotFoundComponent
  },
  {
    path:'**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
