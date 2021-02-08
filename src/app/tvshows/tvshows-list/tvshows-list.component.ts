import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { TvshowModel } from '../tvshow.model';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tvshows-list',
  templateUrl: './tvshows-list.component.html',
  styleUrls: ['./tvshows-list.component.css'],
})
export class TvshowsListComponent implements OnInit, OnDestroy {
  groupTvShowsList = [];
  groupTvShowsArr;
  tvshows: TvshowModel[];
  subscription: Subscription;
  messages: any[] = [];

  constructor(
    private tvshowService: TvshowService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.tvshowService
      .getTvshowsSearch()
      .subscribe((message) => {
        if (message) {
          const centers = this.tvshows?.filter((element) => {
            return element.name
              .toLowerCase()
              .includes(message?.txtSearch?.toLowerCase());
          });
          centers?.sort((a, b) => b.rating.average - a.rating.average);
          this.groupTvShowsArr = this.filterByGenre(centers);
        } else {
          // clear messages when empty message received
          this.messages = [];
        }
      });

    this.subscription = this.tvshowService.tvshowsChanged.subscribe(
      (tvshows: TvshowModel[]) => {
        this.tvshows = tvshows;
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        console.log('completed');
      }
    );
    this.tvshows = this.tvshowService.getTvshows();
    this.tvshows?.sort((a, b) => b.rating.average - a.rating.average);
    this.groupTvShowsArr = this.filterByGenre(this.tvshows);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  filterByGenre(tvshows) {
    return tvshows?.reduce((r, a) => {
      const copy = Object.assign({}, a);
      a?.genres?.forEach((item, index) => {
        r[a?.genres[index]] = [...(r[a?.genres[index]] || []), a];
        return r;
      });
      return r;
    }, {});
  }
}
