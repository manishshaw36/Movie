import { Component, DoCheck } from '@angular/core';
import { defaultComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck {
  constructor () {}
  title = 'movie-preview';
  trendingComponent;
  ngDoCheck() {
    this.trendingComponent = defaultComponent;
  }
}
