import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnerOnboardingPage } from './owner-onboarding.page';

describe('OwnerOnboardingPage', () => {
  let component: OwnerOnboardingPage;
  let fixture: ComponentFixture<OwnerOnboardingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerOnboardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
