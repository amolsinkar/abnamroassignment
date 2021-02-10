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
  public txtSearchVal: string;
  public alphaNumericValidator = '^$|^[A-Za-z0-9]+';
  public searchForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.txtSearchVal = '';
    this.searchForm = this.formBuilder.group({
      txtSearch: ['', [Validators.pattern(this.alphaNumericValidator)]],
    });
  }

  tvshowsSearch(): void {
    if (!this.f?.txtSearch?.invalid) {
      this.router?.navigateByUrl(
        `searchTvshows?search=${this.f?.txtSearch?.value}`
      );
    }
  }

  get f(): any {
    return this.searchForm?.controls;
  }
}
