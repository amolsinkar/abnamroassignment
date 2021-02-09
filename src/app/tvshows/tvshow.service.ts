import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TvshowModel } from './tvshow.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class TvshowService {
  private tvshows: TvshowModel[];

  constructor() {}

  setTvshows(tvshows: TvshowModel[]) {
    this.tvshows = tvshows;
  }

  getTvshows() {
    return this.tvshows ? this.tvshows.slice() : [];
  }
}
