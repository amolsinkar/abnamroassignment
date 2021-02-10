import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { TvshowModel } from '../tvshows/tvshow.model';
import { TvshowService } from '../tvshows/tvshow.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  tvshows: TvshowModel[];
  constructor(private http: HttpClient, private tvshowService: TvshowService) {}

  fetchTvshows(): Observable<TvshowModel[]> {
    return this.http.get<TvshowModel[]>('http://api.tvmaze.com/shows').pipe(
      map((tvshows) => {
        return tvshows.map((tvshow) => {
          return {
            ...tvshow,
          };
        });
      }),
      tap((tvshows) => {
        this.tvshowService.setTvshows(tvshows);
      })
    );
  }
}
