import { TestBed } from '@angular/core/testing';
import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  let service: LoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoggingService] });
    service = TestBed.inject(LoggingService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
