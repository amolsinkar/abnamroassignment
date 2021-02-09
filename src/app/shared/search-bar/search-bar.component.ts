import { Component, OnInit } from '@angular/core';
import { TvshowService } from 'src/app/tvshows/tvshow.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  public txtSearchVal;
  alphaNumericValidator = '^[a-zA-Z0-9]$';
  searchForm: FormGroup;
  constructor(
    private tvshowService: TvshowService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.txtSearchVal = '';
    this.searchForm = this.formBuilder.group({
      txtSearch: ['', Validators.pattern(this.alphaNumericValidator)],
    });
  }

  tvshowsSearch() {
    this.router.navigate(['tvshows'], {
      queryParams: { search: this.txtSearchVal },
    });
  }
}
