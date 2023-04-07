import { TestBed } from '@angular/core/testing';

import { GuardAuthguradGuard } from './guard-authgurad.guard';

describe('GuardAuthguradGuard', () => {
  let guard: GuardAuthguradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardAuthguradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
