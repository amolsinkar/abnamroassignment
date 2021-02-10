import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TvshowService } from './tvshow.service';
import { TvshowModel } from './tvshow.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TvshowsResolverService implements Resolve<TvshowModel[]> {
  constructor(
    private tvshowService: TvshowService,
    private dataStorageService: DataStorageService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TvshowModel[]> {
    const shows = this.tvshowService.getTvshows();
    if (shows.length === 0) {
      return this.dataStorageService.fetchTvshows();
    } else {
      return of(shows);
    }
  }
}
