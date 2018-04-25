import { TestBed, inject } from '@angular/core/testing';

import { MazeResolverService } from './maze-resolver.service';

describe('MazeResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MazeResolverService]
    });
  });

  it('should be created', inject([MazeResolverService], (service: MazeResolverService) => {
    expect(service).toBeTruthy();
  }));
});
