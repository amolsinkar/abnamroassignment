import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HeaderInterceptor } from './header.interceptor';
import { of, Observable } from 'rxjs';

describe('HeaderInterceptor', () => {
  let service: HeaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HeaderInterceptor] });
    service = TestBed.inject(HeaderInterceptor);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpRequestStub: any = {
        clone: () => {
          return of();
        },
      };
      const httpHandlerStub: HttpHandler = {
        handle: () => {
          return of();
        },
      };
      spyOn(httpRequestStub, 'clone').and.callThrough();
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpRequestStub.clone).toHaveBeenCalled();
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });
});
