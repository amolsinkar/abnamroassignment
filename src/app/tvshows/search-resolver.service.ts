import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ParamMap,
} from '@angular/router';
import { TvshowService } from './tvshow.service';
import { TvshowModel, SearchTvshowModel } from './tvshow.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchResolverService implements Resolve<SearchTvshowModel[]> {
  constructor(
    private tvshowService: TvshowService,
    private dataStorageService: DataStorageService
  ) {}

  resolve(
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SearchTvshowModel[]> {
    let searchText;
    searchText = activatedRoute.params?.id;
    return this.dataStorageService.getTvshowsDetails(searchText);
  }
}
