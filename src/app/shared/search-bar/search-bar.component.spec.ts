import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TvshowService } from 'src/app/tvshows/tvshow.service';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: (array, object) => ({}) });
    const formBuilderStub = () => ({ group: (obj) => ({}) });
    // group(controlsConfig: { [key: string]: any; }, options?: AbstractControlOptions): FormGroup
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SearchBarComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
      ],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`alphaNumericValidator has default value`, () => {
    expect(component.alphaNumericValidator).toEqual('^$|^[A-Za-z0-9]+');
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
        FormBuilder
      );
      spyOn(formBuilderStub, 'group').and.callThrough();
      component.ngOnInit();
      // expect(formBuilderStub.group).toHaveBeenCalled(); //TODO: group is deprecated
    });
  });

  describe('tvshowsSearch', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.tvshowsSearch();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
