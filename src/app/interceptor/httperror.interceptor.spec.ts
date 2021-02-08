import { TestBed } from '@angular/core/testing';
import { HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpErrorInterceptor } from './httperror.interceptor';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

describe('HttpErrorInterceptor', () => {
  let service: HttpErrorInterceptor;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpErrorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true,
        },
      ],
    });
    service = TestBed.inject(HttpErrorInterceptor);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpRequestStub: HttpRequest<any> = <any>{};
      const httpHandlerStub: HttpHandler = <any>{
        handle: () => {
          return of();
        },
      };
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });
});
