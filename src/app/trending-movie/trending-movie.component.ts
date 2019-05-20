import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-trending-movie',
  templateUrl: './trending-movie.component.html',
  styleUrls: ['./trending-movie.component.css']
})
export class TrendingMovieComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }

  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true,    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    }
  };

  labels = [];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Movies Ratings',
      data: []
    }
  ];

  // CHART COLOR.
  colors = [
    {
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ];

  ngOnInit() {
    this.httpService.getTrendingMovies().subscribe(
      data => {
        data['results'].map((ele) => {
          this.chartData[0].data.push(ele.vote_average);
          this.labels.push(ele.title === undefined ? ele.original_name : ele.title);
        });
      },
      (err: HttpErrorResponse) => {
          console.log (err.message);
      }
    );
  }

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }


}
