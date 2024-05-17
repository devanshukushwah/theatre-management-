import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFieldsComponent } from './general-fields.component';

describe('GeneralFieldsComponent', () => {
  let component: GeneralFieldsComponent;
  let fixture: ComponentFixture<GeneralFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
