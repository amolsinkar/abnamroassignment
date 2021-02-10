import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvshowModel, SearchTvshowModel } from '../tvshows/tvshow.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  tvshows: TvshowModel[];
  constructor(private http: HttpClient) {}

  fetchTvshows(): Observable<TvshowModel[]> {
    // We do not subscribe here! We let the resolver take care of that
    return this.http.get<TvshowModel[]>('http://api.tvmaze.com/shows');
  }

  getTvshowsDetails(searchText: string): Observable<SearchTvshowModel[]> {
    const searchURL = `http://api.tvmaze.com/shows/${searchText}`;
    return this.http.get<SearchTvshowModel[]>(searchURL);
  }

  getSearchTvshows(searchText): Observable<SearchTvshowModel[]> {
    const searchURL = 'http://api.tvmaze.com/search/shows?q=' + searchText;
    return this.http.get<SearchTvshowModel[]>(searchURL);
  }
}
