import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnerStatusPage } from './owner-status.page';

describe('OwnerStatusPage', () => {
  let component: OwnerStatusPage;
  let fixture: ComponentFixture<OwnerStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
