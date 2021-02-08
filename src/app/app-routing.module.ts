import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { TvshowDetailComponent } from './tvshows/tvshow-detail/tvshow-detail.component';
import { TvshowsResolverService } from './tvshows/tvshows-resolver.service';
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/tvshows', pathMatch: 'full' },
  {
    path: 'tvshows',
    component: TvshowsComponent,
    resolve: [TvshowsResolverService],
  },
  {
    path: 'tvshows/:id',
    component: TvshowDetailComponent,
    resolve: [TvshowsResolverService],
  },

  { path: '**', component: TvshowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
