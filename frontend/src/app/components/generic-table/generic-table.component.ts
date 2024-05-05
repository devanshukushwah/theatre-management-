import { Component, Input, OnInit } from '@angular/core';
import { GenericTable } from 'src/app/common/interface/GenericTable';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  columns: string[] = [];
  headerConfig: any = {};
  headerWidthConfig: any = {};
  @Input() config: GenericTable[] = [];

  @Input() noRecordFoundLabel: string = 'No records found';

  constructor() {}

  ngOnInit(): void {
    this.configureTable();
  }

  private configureTable() {
    this.config.sort((a, b) => a.order - b.order);
    this.columns = this.config.map((item) => item.ref);
    this.config.forEach((item) => {
      this.headerConfig[item.ref] = item.name;
      if (item?.width) this.headerWidthConfig[item.ref] = item.width;
    });
  }
}
