import { TestBed } from '@angular/core/testing';

import { AuthUsernameGuard } from './auth-username.guard';

describe('AuthUsernameGuard', () => {
  let guard: AuthUsernameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthUsernameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
