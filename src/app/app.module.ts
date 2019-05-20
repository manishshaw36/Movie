import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PopularMovieComponent } from './popular-movie/popular-movie.component';
import { TrendingMovieComponent } from './trending-movie/trending-movie.component';
import { HttpServiceService } from './http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PopularMovieComponent,
    TrendingMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      {
        path: '**',
        redirectTo: '/'
      }
    ]),
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
