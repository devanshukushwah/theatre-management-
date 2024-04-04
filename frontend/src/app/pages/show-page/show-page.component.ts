import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/common.interface/Show';
import { CredentialsService } from 'src/app/services/credentials.service';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css'],
})
export class ShowPageComponent implements OnInit {
  shows: Show[] = [];

  constructor(
    public credService: CredentialsService,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    this.getAllShow();
  }

  getAllShow(): void {
    this.showService.getAllShows().subscribe((res) => {
      if (res?.data) {
        this.shows = res.data;
      }
    });
  }
}
