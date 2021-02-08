import { Component, OnInit } from '@angular/core';
import { TvshowService } from 'src/app/tvshows/tvshow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  public txtSearchVal;
  constructor(private tvshowService: TvshowService, private router: Router) {}

  ngOnInit(): void {
    this.txtSearchVal = '';
  }
  tvshowsSearch() {
    this.tvshowService.setTvshowsSearch(this.txtSearchVal);
  }
}
