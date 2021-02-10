import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { GlobalErrorHandler } from './globalerrorhandler.service';
import { LoggingService } from './logging.service';

describe('GlobalErrorHandler', () => {
  let service: GlobalErrorHandler;
  beforeEach(() => {
    const injectorStub = () => ({
      get: () => ({ path: () => ({}) }),
    });
    TestBed.configureTestingModule({
      providers: [
        GlobalErrorHandler,
        { provide: Injector, useFactory: injectorStub },
      ],
    });
    service = TestBed.inject(GlobalErrorHandler);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
