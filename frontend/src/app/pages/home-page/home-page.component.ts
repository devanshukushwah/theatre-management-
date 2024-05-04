import { Component, OnInit } from '@angular/core';
import { GenericTable } from 'src/app/common/interface/GenericTable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  showTableConfig: GenericTable[] = [
    {
      name: 'Movie Name',
      ref: 'movieName',
      order: 1,
    },
    {
      name: 'Duration',
      ref: 'duration',
      order: 2,
    },
    {
      name: 'Start Time',
      ref: 'startTime',
      order: 3,
    },
    {
      name: 'End Time',
      ref: 'endTime',
      order: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
