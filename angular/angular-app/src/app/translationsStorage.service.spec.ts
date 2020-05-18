import { TestBed } from '@angular/core/testing';

import TranslationsStorageService from './translationsStorage.service';

describe('TranslationsStorageService', () => {
  let service: TranslationsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
