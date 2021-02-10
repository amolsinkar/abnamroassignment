import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataStorageService } from './data-storage.service';

describe('DataStorageService', () => {
  let service: DataStorageService;
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
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataStorageService],
    });
    service = TestBed.inject(DataStorageService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchTvshows', () => {
    it('get call', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.fetchTvshows().subscribe((res) => {
        expect(res).toEqual(tvshowData);
      });
      const req = httpTestingController.expectOne(
        'http://api.tvmaze.com/shows'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(tvshowData);
      httpTestingController.verify();
    });
  });
  describe('getTvshowsDetails', () => {
    it('get call', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getTvshowsDetails('1').subscribe((res) => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne(
        'http://api.tvmaze.com/shows/1'
      );
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });

  describe('getSearchTvshows', () => {
    it('get call', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getSearchTvshows('test').subscribe((res) => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne(
        'http://api.tvmaze.com/search/shows?q=test'
      );
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
