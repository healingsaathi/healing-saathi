import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueManagementComponent } from './rescue-management.component';

describe('RescueManagementComponent', () => {
  let component: RescueManagementComponent;
  let fixture: ComponentFixture<RescueManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescueManagementComponent]
    });
    fixture = TestBed.createComponent(RescueManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
