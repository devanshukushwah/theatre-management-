import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericTable } from 'src/app/common/interface/GenericTable';
import { Show } from 'src/app/common/interface/Show';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  columns: string[] = [];
  columnDefination: string[] = [];
  headerConfig: any = {};
  headerWidthConfig: any = {};
  @Input() config: GenericTable[] = [];
  @Input() bookButton: boolean = false;
  @Input() adminControl: boolean = false;
  @Input() readonly: boolean = false;

  @Input() noRecordFoundLabel: string = 'No records found';

  @Output() handleBookShowEvent: EventEmitter<Show> = new EventEmitter<Show>();
  @Output() handleDeleteShowEvent: EventEmitter<Show> =
    new EventEmitter<Show>();

  constructor() {}

  ngOnInit(): void {
    this.configureTable();

    if (this.bookButton) {
      this.columnDefination.push('book');
    }

    if (this.adminControl) {
      this.columnDefination.push('admin');
    }
  }

  private configureTable() {
    this.config.sort((a, b) => a.order - b.order);
    this.columns = this.config.map((item) => item.ref);
    this.columnDefination = this.config.map((item) => item.ref);
    this.config.forEach((item) => {
      this.headerConfig[item.ref] = item.name;
      if (item?.width) this.headerWidthConfig[item.ref] = item.width;
    });
  }

  handleBookShow(show: Show): void {
    this.handleBookShowEvent.emit(show);
  }
  handleDeleteShow(show: Show): void {
    this.handleDeleteShowEvent.emit(show);
  }
}
