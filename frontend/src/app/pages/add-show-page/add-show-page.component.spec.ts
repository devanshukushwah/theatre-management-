import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowPageComponent } from './add-show-page.component';

describe('AddShowPageComponent', () => {
  let component: AddShowPageComponent;
  let fixture: ComponentFixture<AddShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
