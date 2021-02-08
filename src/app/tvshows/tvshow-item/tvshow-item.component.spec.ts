import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { Router } from '@angular/router';
import { TvshowItemComponent } from './tvshow-item.component';

describe('TvshowItemComponent', () => {
  let component: TvshowItemComponent;
  let fixture: ComponentFixture<TvshowItemComponent>;

  beforeEach(() => {
    const tvshowServiceStub = () => ({});
    const routerStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TvshowItemComponent],
      providers: [
        { provide: TvshowService, useFactory: tvshowServiceStub },
        { provide: Router, useFactory: routerStub },
      ],
    });
    fixture = TestBed.createComponent(TvshowItemComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  
});
