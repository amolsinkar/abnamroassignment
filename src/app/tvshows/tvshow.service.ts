import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TvshowModel } from './tvshow.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class TvshowService {
  tvshowsChanged = new Subject<TvshowModel[]>();
  tvshowsDetailChanged = new Subject<TvshowModel>();
  private tvshows: TvshowModel[];
  private searchSubject = new Subject<any>();

  constructor() {}

  setTvshows(tvshows: TvshowModel[]) {
    this.tvshows = tvshows;
    // this.tvshowsChanged.next(this.tvshows?.slice());
  }

  getTvshows() {
    return this.tvshows ? this.tvshows.slice() : [];
  }

  setTvshowsSearch(txtSearch) {
    this.searchSubject.next({ txtSearch });
  }

  getTvshowsSearch(): Observable<any> {
    return this.searchSubject.asObservable();
  }
}
