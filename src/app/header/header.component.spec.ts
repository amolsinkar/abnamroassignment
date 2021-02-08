import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TvshowService } from '../tvshows/tvshow.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    const tvshowServiceStub = () => ({
      setTvshowsSearch: txtSearchVal => ({})
    });
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HeaderComponent],
      providers: [{ provide: TvshowService, useFactory: tvshowServiceStub }]
    });
    fixture = TestBed.createComponent(HeaderComponent);
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
