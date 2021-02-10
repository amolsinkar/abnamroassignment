import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { TvshowModel } from '../tvshow.model';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.tvshowLoad();
    this.activatedRoute.queryParamMap?.subscribe((params: ParamMap) => {
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
      }
    });
  }

  tvshowLoad(): void {
    this.activatedRoute.data?.subscribe((data) => {
      this.tvshows = data?.showResolver;
    });
    this.tvshows?.sort((a, b) => b.rating.average - a.rating.average);
    this.groupTvShowsArr = this.filterByGenre(this.tvshows);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  filterByGenre(tvshows): any {
    return tvshows?.reduce((r, a) => {
      const copy = Object.assign({}, a);
      a?.genres?.forEach((item, index) => {
        r[a?.genres[index]] = [...(r[a?.genres[index]] || []), a];
        return r;
      });
      return r;
    }, {});
  }

  onLinkClick(): void {
    this.router.navigateByUrl('/tvshows');
  }
}
