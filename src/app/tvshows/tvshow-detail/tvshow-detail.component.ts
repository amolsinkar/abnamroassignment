import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TvshowModel } from '../tvshow.model';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(
    private tvshowService: TvshowService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.tvshows = this.tvshowService
        ?.getTvshows()
        ?.filter((element: TvshowModel) => {
          if (element.id === this.id) {
            console.log('tvshows', element);
            return element;
          }
        });
      this.tvshow = this.tvshows && this.tvshows[0];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
