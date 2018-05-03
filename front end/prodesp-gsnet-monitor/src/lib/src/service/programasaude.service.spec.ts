/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgramasaudeService } from './programasaude.service';

describe('Service: Programasaude', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramasaudeService]
    });
  });

  it('should ...', inject([ProgramasaudeService], (service: ProgramasaudeService) => {
    expect(service).toBeTruthy();
  }));
});
