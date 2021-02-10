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
  id: number;
  subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data?.subscribe((data) => {
      this.tvshow = data?.showResolverDetails;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
