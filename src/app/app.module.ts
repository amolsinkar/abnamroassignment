import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { TvshowsListComponent } from './tvshows/tvshows-list/tvshows-list.component';
import { TvshowItemComponent } from './tvshows/tvshow-item/tvshow-item.component';
import { TvshowDetailComponent } from './tvshows/tvshow-detail/tvshow-detail.component';
import { TvshowService } from './tvshows/tvshow.service';
import { from } from 'rxjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { HttpErrorInterceptor } from './interceptor/httperror.interceptor';
import { GlobalErrorHandler } from './shared/globalerrorhandler.service';
import { LoggingService } from './shared/logging.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TvshowsComponent,
    TvshowsListComponent,
    TvshowItemComponent,
    TvshowDetailComponent,
    SearchBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    TvshowService,
    LoggingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
