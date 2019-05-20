import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('.navigation a').on('click', function() {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        defaultComponent = $(this).text();
      }
    });
  }

}

export let defaultComponent = 'Trending Chart';
