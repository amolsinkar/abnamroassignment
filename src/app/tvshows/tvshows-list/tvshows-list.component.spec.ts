import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TvshowService } from '../tvshow.service';
import { TvshowsListComponent } from './tvshows-list.component';

describe('TvshowsListComponent', () => {
  let component: TvshowsListComponent;
  let fixture: ComponentFixture<TvshowsListComponent>;
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
        "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
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
    const routerStub = () => ({});
    const activatedRouteStub = () => ({});
    const tvshowServiceStub = () => ({
      getTvshowsSearch: () => ({ subscribe: (f) => f(tvshowData) }),
      tvshowsChanged: { subscribe: (f) => f(tvshowData) },
      getTvshows: () => [
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
            "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
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
      ],
    });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TvshowsListComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: TvshowService, useFactory: tvshowServiceStub },
      ],
    });
    fixture = TestBed.createComponent(TvshowsListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`groupTvShowsList has default value`, () => {
    expect(component.groupTvShowsList).toEqual([]);
  });

  it(`messages has default value`, () => {
    expect(component.messages).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const tvshowServiceStub: TvshowService = fixture.debugElement.injector.get(
        TvshowService
      );
      spyOn(component, 'filterByGenre').and.callThrough();
      spyOn(tvshowServiceStub, 'getTvshowsSearch').and.callThrough();
      spyOn(tvshowServiceStub, 'getTvshows').and.callThrough();
      component.ngOnInit();
      expect(component.filterByGenre).toHaveBeenCalled();
      expect(tvshowServiceStub.getTvshowsSearch).toHaveBeenCalled();
      expect(tvshowServiceStub.getTvshows).toHaveBeenCalled();
    });

    it('filterByGenre calls', () => {
      const tvshowServiceStub: TvshowService = fixture.debugElement.injector.get(
        TvshowService
      );
      spyOn(component, 'filterByGenre').and.callThrough();
      spyOn(tvshowServiceStub, 'getTvshowsSearch').and.callThrough();
      spyOn(tvshowServiceStub, 'getTvshows')
        .and.callThrough()
        .and.returnValue(tvshowData);
      component.ngOnInit();
    });
  });
});
