import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../tvshows/tvshow.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
}
