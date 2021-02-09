import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router, convertToParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TvshowService } from '../tvshow.service';
import { TvshowsListComponent } from './tvshows-list.component';
import { of } from 'rxjs';

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
    const changeDetectorRefStub = () => ({});
    const routerStub = () => ({
      routeReuseStrategy: { shouldReuseRoute: () => false },
      navigateByUrl: (string) => jasmine.createSpy('navigateByUrl'),
    });
    const activatedRouteStub = () => ({
      queryParamMap: of({
        params: jasmine.createSpy('params'),
        get: () => {
          return 'search';
        },
      }),
      snapshot: { data: { showResolver: tvshowData } },
    });
    const tvshowServiceStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TvshowsListComponent],
      providers: [
        { provide: ChangeDetectorRef, useFactory: changeDetectorRefStub },
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

  it(`noresultfound has default value`, () => {
    expect(component.noresultfound).toEqual(true);
  });
  it(`tvshowLoad `, () => {
    expect(component.tvshowLoad).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'tvshowLoad').and.callThrough();
      spyOn(component, 'filterByGenre').and.callThrough();
      component.tvshows = tvshowData;
      component.ngOnInit();
      expect(component.tvshowLoad).toHaveBeenCalled();
      expect(component.filterByGenre).toHaveBeenCalled();
    });
  });

  describe('tvshowLoad', () => {
    it('makes expected calls', () => {
      spyOn(component, 'filterByGenre').and.callThrough();
      component.tvshowLoad();
      expect(component.filterByGenre).toHaveBeenCalled();
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
