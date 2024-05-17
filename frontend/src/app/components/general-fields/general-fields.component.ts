import { Component, Input, OnInit } from '@angular/core';
import { GenericField } from '../../common/interface/GeneralField';

@Component({
  selector: 'app-general-fields',
  templateUrl: './general-fields.component.html',
  styleUrls: ['./general-fields.component.css'],
})
export class GeneralFieldsComponent implements OnInit {
  @Input() data: GenericField[] = [];

  constructor() {}

  ngOnInit(): void {}
}
