import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }

  popularMovies = [];
  page = 1;
  totalPage = 1;

  getPopularMoviesData (page, popularMovies) {
    this.httpService.getPopularMovies(page).subscribe(
      data => {
        this.totalPage = data['total_pages'];
        data['results'].map((ele) => {
          popularMovies.push({
            labels: ele.title === undefined ? ele.original_name : ele.title,
            imageUrl: 'https://image.tmdb.org/t/p/w500' + ele.poster_path
          });
        });

        if (page <= 1) {
          $('#lessBtn').addClass('disabled');
        } else {
          $('#lessBtn').removeClass('disabled');
        }
        if (this.totalPage > page) {
          $('#greaterBtn').removeClass('disabled');
        } else {
          $('#greaterBtn').addClass('disabled');
        }
      },
      (err: HttpErrorResponse) => {
          console.log (err.message);
      }
    );
  }

  ngOnInit() {
    this.getPopularMoviesData(this.page, this.popularMovies);
    $('#lessBtn').on('click', () => {
      if (this.page > 1) {
        this.page -= 1;
        this.getPopularMoviesData(this.page, this.popularMovies = []);
      }
    });
    $('#greaterBtn').on('click', () => {
        if (this.page < this.totalPage) {
          this.page += 1;
          this.getPopularMoviesData(this.page, this.popularMovies = []);
        }
    });
  }

}
