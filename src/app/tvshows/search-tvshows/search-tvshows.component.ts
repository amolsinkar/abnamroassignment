import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchTvshowModel } from '../tvshow.model';
import { Subscription } from 'rxjs';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-search-tvshows',
  templateUrl: './search-tvshows.component.html',
  styleUrls: ['./search-tvshows.component.css'],
})
export class SearchTvshowsComponent implements OnInit, OnDestroy {
  tvshows: SearchTvshowModel[];
  subscription: Subscription;
  noresultfound = true;
  public searchText: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tvshowService: TvshowService
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParamMap?.subscribe(
      (params) => {
        this.searchText = params?.get('search');
        if (this.searchText) {
          this.tvshowService
            .searchTvshows(this.searchText)
            ?.subscribe((data) => {
              this.tvshows = data;
              this.tvshows?.length
                ? (this.noresultfound = true)
                : (this.noresultfound = false);
            });
        }
      }
    );
  }

  onLinkClick(): void {
    this.router.navigateByUrl('/tvshows');
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
