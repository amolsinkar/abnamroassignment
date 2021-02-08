import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TvshowService } from './tvshow.service';
import { TvshowModel } from './tvshow.model';
import { DataStorageService } from '../shared/data-storage.service';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TvshowsResolverService implements Resolve<TvshowModel[]> {
  constructor(
    private tvshowService: TvshowService,
    private dataStorageService: DataStorageService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const shows = this.tvshowService.getTvshows();
    if (shows.length === 0) {
      return this.dataStorageService.fetchTvshows();
    } else {
      return shows;
    }
    // return this.dataStorageService.fetchTvshows();
  }
}
