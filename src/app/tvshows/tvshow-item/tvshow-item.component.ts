import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TvshowModel } from '../tvshow.model';
import { TvshowService } from '../tvshow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvshow-item',
  templateUrl: './tvshow-item.component.html',
  styleUrls: ['./tvshow-item.component.css'],
})
export class TvshowItemComponent implements OnInit {
  @Input() tvshow: TvshowModel;
  @Input() index: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  sendToList(id): void {
    this.router?.navigate(['tvshows/' + id]);
  }
}
