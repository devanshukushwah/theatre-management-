import { TestBed } from '@angular/core/testing';

import { HttpUrlsService } from './http-urls.service';

describe('HttpUrlsService', () => {
  let service: HttpUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
