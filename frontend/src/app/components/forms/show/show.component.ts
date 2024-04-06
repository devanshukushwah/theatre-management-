import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Show } from 'src/app/common/interface/Show';

@Component({
  selector: 'app-form-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  @Input() show!: Show;
  @Output() handleSubmitEvent = new EventEmitter<Show>();
  @Input() buttonLabel: string = 'Submit';
  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    this.handleSubmitEvent.emit(this.show);
  }
}
