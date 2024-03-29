import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-field',
  templateUrl: './profile-field.component.html',
  styleUrls: ['./profile-field.component.css'],
})
export class ProfileFieldComponent implements OnInit {
  @Input() title: string | null | undefined;
  @Input() value: string | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}
