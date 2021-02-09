import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { TvshowDetailComponent } from './tvshows/tvshow-detail/tvshow-detail.component';
import { TvshowsResolverService } from './tvshows/tvshows-resolver.service';
import { from } from 'rxjs';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', redirectTo: '/tvshows', pathMatch: 'full' },
  {
    path: 'tvshows',
    component: TvshowsComponent,
    resolve: { showResolver: TvshowsResolverService },
  },
  {
    path: 'tvshows/:id',
    component: TvshowDetailComponent,
    resolve: { showResolverDetails: TvshowsResolverService },
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
