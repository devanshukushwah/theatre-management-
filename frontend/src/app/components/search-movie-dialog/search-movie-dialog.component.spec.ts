import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieDialogComponent } from './search-movie-dialog.component';

describe('SearchMovieDialogComponent', () => {
  let component: SearchMovieDialogComponent;
  let fixture: ComponentFixture<SearchMovieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMovieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
