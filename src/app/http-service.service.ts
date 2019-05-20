import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(private httpService: HttpClient) { }

  apiKey = '4b10cf2f8e6ed1fcb506bd3929ecee40';

  getTrendingMovies() {
    return this.httpService.get('https://api.themoviedb.org/3/trending/all/day?api_key=' + this.apiKey,
      {responseType: 'json'});
  }

  getPopularMovies(page) {
    return this.httpService.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${page}`,
      {responseType: 'json'});
  }

}
