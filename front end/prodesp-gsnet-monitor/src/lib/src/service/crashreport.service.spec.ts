/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrashreportService } from './crashreport.service';

describe('Service: Crashreport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrashreportService]
    });
  });

  it('should ...', inject([CrashreportService], (service: CrashreportService) => {
    expect(service).toBeTruthy();
  }));
});
