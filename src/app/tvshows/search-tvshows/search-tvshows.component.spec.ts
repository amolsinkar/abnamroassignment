import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TvshowService } from '../tvshow.service';
import { SearchTvshowsComponent } from './search-tvshows.component';
import { of } from 'rxjs';

describe('SearchTvshowsComponent', () => {
  let component: SearchTvshowsComponent;
  let fixture: ComponentFixture<SearchTvshowsComponent>;
  const tvshowData = [
    {
      id: 1,
      url: 'http://www.tvmaze.com/shows/1/under-the-dome',
      name: 'Under the Dome',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Science-Fiction', 'Thriller'],
      status: 'Ended',
      runtime: 60,
      premiered: '2013-06-24',
      officialSite: 'http://www.cbs.com/shows/under-the-dome/',
      schedule: {
        time: '22:00',
        days: ['Thursday'],
      },
      rating: {
        average: 6.5,
      },
      weight: 97,
      network: {
        id: 2,
        name: 'CBS',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: 25988,
        thetvdb: 264492,
        imdb: 'tt1553656',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
      },
      summary:
        '<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The towns inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>',
      updated: 1573667713,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/1',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/185054',
        },
      },
    },
    {
      id: 3,
      url: 'http://www.tvmaze.com/shows/1/under-the-dome',
      name: 'Under the Dome',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Science-Fiction', 'Thriller'],
      status: 'Ended',
      runtime: 60,
      premiered: '2013-06-24',
      officialSite: 'http://www.cbs.com/shows/under-the-dome/',
      schedule: {
        time: '22:00',
        days: ['Thursday'],
      },
      rating: {
        average: 6.5,
      },
      weight: 97,
      network: {
        id: 2,
        name: 'CBS',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: 25988,
        thetvdb: 264492,
        imdb: 'tt1553656',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
      },
      summary:
        '<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The towns inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>',
      updated: 1573667713,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/1',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/185054',
        },
      },
    },
    {
      id: 4,
      url: 'http://www.tvmaze.com/shows/1/under-the-dome',
      name: 'Under the Dome',
      type: 'Scripted',
      language: 'English',
      genres: ['Drama', 'Science-Fiction', 'Thriller'],
      status: 'Ended',
      runtime: 60,
      premiered: '2013-06-24',
      officialSite: 'http://www.cbs.com/shows/under-the-dome/',
      schedule: {
        time: '22:00',
        days: ['Thursday'],
      },
      rating: {
        average: 6.5,
      },
      weight: 97,
      network: {
        id: 2,
        name: 'CBS',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York',
        },
      },
      webChannel: null,
      externals: {
        tvrage: 25988,
        thetvdb: 264492,
        imdb: 'tt1553656',
      },
      image: {
        medium:
          'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
        original:
          'http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
      },
      summary:
        '<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The towns inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>',
      updated: 1573667713,
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/1',
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/185054',
        },
      },
    },
  ];
  beforeEach(() => {
    const activatedRouteStub = () => ({
      queryParamMap: of({
        params: jasmine.createSpy('params'),
        get: () => {
          return 'search';
        },
      }),
    });
    const routerStub = () => ({ navigateByUrl: () => ({}) });
    const tvshowServiceStub = () => ({
      searchTvshows: (searchText) => ({ subscribe: (f) => f(of(tvshowData)) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchTvshowsComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: TvshowService, useFactory: tvshowServiceStub },
      ],
    });
    fixture = TestBed.createComponent(SearchTvshowsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`noresultfound has default value`, () => {
    expect(component.noresultfound).toEqual(true);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const tvshowServiceStub: TvshowService = fixture.debugElement.injector.get(
        TvshowService
      );
      spyOn(tvshowServiceStub, 'searchTvshows').and.callThrough();
      component.ngOnInit();
      expect(tvshowServiceStub.searchTvshows).toHaveBeenCalled();
    });
  });

  describe('onLinkClick', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.onLinkClick();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
