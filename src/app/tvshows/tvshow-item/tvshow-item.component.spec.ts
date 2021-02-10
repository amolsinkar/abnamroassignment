import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TvshowItemComponent } from './tvshow-item.component';
import { Router } from '@angular/router';

describe('TvshowItemComponent', () => {
  let component: TvshowItemComponent;
  let fixture: ComponentFixture<TvshowItemComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array, object) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TvshowItemComponent],
      providers: [{ provide: Router, useFactory: routerStub }],
    });
    fixture = TestBed.createComponent(TvshowItemComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
