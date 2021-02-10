import { Injectable } from '@angular/core';
import { TvshowModel } from './tvshow.model';

@Injectable()
export class TvshowService {
  private tvshows: TvshowModel[];

  constructor() {}

  setTvshows(tvshows: TvshowModel[]): void {
    this.tvshows = tvshows;
  }

  getTvshows(): TvshowModel[] {
    return this.tvshows ? this.tvshows.slice() : [];
  }
}
