import { TestBed } from '@angular/core/testing';

import { MakeUpService } from './make-up.service';

describe('MakeUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeUpService = TestBed.get(MakeUpService);
    expect(service).toBeTruthy();
  });
});
