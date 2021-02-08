import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TvshowService } from '../tvshows/tvshow.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private tvshowService: TvshowService) {}
  public txtSearchVal;
  ngOnInit(): void {}

  tvshowsSearch() {
    this.tvshowService.setTvshowsSearch(this.txtSearchVal);
  }
}
