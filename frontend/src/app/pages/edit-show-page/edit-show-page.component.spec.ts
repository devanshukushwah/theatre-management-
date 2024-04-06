import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShowPageComponent } from './edit-show-page.component';

describe('EditShowPageComponent', () => {
  let component: EditShowPageComponent;
  let fixture: ComponentFixture<EditShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
