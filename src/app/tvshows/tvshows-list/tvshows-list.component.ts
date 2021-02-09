import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  noresultfound = true;

  constructor(
    private tvshowService: TvshowService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.tvshowLoad();
    this.route.queryParamMap?.subscribe((params: ParamMap) => {
      if (params && params?.get('search')) {
        const showList = this.tvshows?.filter((element) => {
          return element.name
            .toLowerCase()
            .includes(params?.get('search')?.toLowerCase());
        });
        showList?.sort((a, b) => b.rating.average - a.rating.average);
        this.groupTvShowsArr = this.filterByGenre(showList);
        showList.length
          ? (this.noresultfound = true)
          : (this.noresultfound = false);
        // this.changeDetectorRef.detectChanges();
      }
    });
  }

  tvshowLoad() {
    this.tvshows = this.route.snapshot?.data['showResolver'];
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

  onLinkClick() {
    this.router.navigateByUrl('/tvshows');
  }
}
