import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueManagementTableComponent } from './rescue-management-table.component';

describe('RescueManagementTableComponent', () => {
  let component: RescueManagementTableComponent;
  let fixture: ComponentFixture<RescueManagementTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescueManagementTableComponent]
    });
    fixture = TestBed.createComponent(RescueManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
