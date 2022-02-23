import { Component } from '@angular/core';
import { FullYearService } from './services/fullYear.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson7';
  constructor(public isFullYear:FullYearService){ }
  
}
