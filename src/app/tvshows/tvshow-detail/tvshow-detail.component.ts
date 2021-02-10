import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TvshowModel } from '../tvshow.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tvshow-detail',
  templateUrl: './tvshow-detail.component.html',
  styleUrls: ['./tvshow-detail.component.css'],
})
export class TvshowDetailComponent implements OnInit, OnDestroy {
  tvshow: TvshowModel;
  tvshows: TvshowModel[];
  id: number;
  subscription: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      const id = 'id';
      const showResolverDetails = 'showResolverDetails';
      this.id = +params[id];
      this.tvshows = this.route.snapshot.data[showResolverDetails]?.filter(
        (element: TvshowModel) => {
          if (element.id === this.id) {
            return element;
          }
        }
      );
      this.tvshow = this.tvshows && this.tvshows[0];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
