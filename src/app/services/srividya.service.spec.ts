import { TestBed, inject } from '@angular/core/testing';

import { SrividyaService } from './srividya.service';

describe('SrividyaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrividyaService]
    });
  });

  it('should be created', inject([SrividyaService], (service: SrividyaService) => {
    expect(service).toBeTruthy();
  }));
});
