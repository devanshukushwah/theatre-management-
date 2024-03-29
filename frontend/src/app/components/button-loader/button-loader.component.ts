import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-loader',
  templateUrl: './button-loader.component.html',
  styleUrls: ['./button-loader.component.css'],
})
export class ButtonLoaderComponent implements OnInit {
  @Input() disabled: boolean | null | undefined;
  @Input() label: string | null | undefined;
  @Input() type: string | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}
