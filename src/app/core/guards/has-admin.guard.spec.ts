import { TestBed } from '@angular/core/testing';

import { HasAdminGuard } from './has-admin.guard';

describe('HasAdminGuard', () => {
  let guard: HasAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
