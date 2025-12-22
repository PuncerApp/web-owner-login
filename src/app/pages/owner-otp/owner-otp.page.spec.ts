import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnerOtpPage } from './owner-otp.page';

describe('OwnerOtpPage', () => {
  let component: OwnerOtpPage;
  let fixture: ComponentFixture<OwnerOtpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
