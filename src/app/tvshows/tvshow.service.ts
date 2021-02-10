import { Injectable } from '@angular/core';
import { TvshowModel, SearchTvshowModel } from './tvshow.model';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class TvshowService {
  private tvshows: TvshowModel[];

  constructor(private dataStorageService: DataStorageService) {}

  setTvshows(tvshows: TvshowModel[]): void {
    this.tvshows = tvshows;
  }

  getTvshows(): TvshowModel[] {
    return this.tvshows ? this.tvshows.slice() : [];
  }

  searchTvshows(searchText): Observable<SearchTvshowModel[]> {
    return this.dataStorageService.getSearchTvshows(searchText);
  }
}
