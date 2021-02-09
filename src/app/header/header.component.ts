import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TvshowService } from '../tvshows/tvshow.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private tvshowService: TvshowService, private router: Router) {}
  public txtSearchVal;
  ngOnInit(): void {}

  routeToTvshows() {
    this.router.navigateByUrl('/tvshows');
  }
}
