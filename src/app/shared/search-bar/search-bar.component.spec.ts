import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TvshowService } from 'src/app/tvshows/tvshow.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    const tvshowServiceStub = () => ({
      setTvshowsSearch: txtSearchVal => ({})
    });
    const routerStub = () => ({});
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchBarComponent],
      providers: [
        { provide: TvshowService, useFactory: tvshowServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('tvshowsSearch', () => {
    it('makes expected calls', () => {
      const tvshowServiceStub: TvshowService = fixture.debugElement.injector.get(
        TvshowService
      );
      spyOn(tvshowServiceStub, 'setTvshowsSearch').and.callThrough();
      component.tvshowsSearch();
      expect(tvshowServiceStub.setTvshowsSearch).toHaveBeenCalled();
    });
  });
});
