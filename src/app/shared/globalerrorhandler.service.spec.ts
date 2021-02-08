import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { GlobalErrorHandler } from './globalerrorhandler.service';
import { LoggingService } from './logging.service';

describe('GlobalErrorHandler', () => {
  let service: GlobalErrorHandler;
  let loggingservice: LoggingService;
  beforeEach(() => {
    // const loggingServiceStub = () => ({ log: ({}) => {} });

    const injectorStub = () => ({
      get: (loggingService) => ({ path: () => ({}) }),
    });
    TestBed.configureTestingModule({
      providers: [
        GlobalErrorHandler,
        { provide: Injector, useFactory: injectorStub },
        // { provide: LoggingService, userFactory: loggingServiceStub },
        // LoggingService,
      ],
    });
    service = TestBed.inject(GlobalErrorHandler);
    // loggingservice = TestBed.inject(LoggingService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('should call the handleError', () => {
    // const error = new Error();
    // service.handleError(error);
    // // expect(service.handleError).toHaveBeenCalledWith(error);
  });
});
