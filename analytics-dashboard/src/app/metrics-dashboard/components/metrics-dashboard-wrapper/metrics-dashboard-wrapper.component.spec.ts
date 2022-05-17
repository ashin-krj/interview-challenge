import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsDashboardWrapperComponent } from './metrics-dashboard-wrapper.component';

describe('MetricsDashboardWrapperComponent', () => {
  let component: MetricsDashboardWrapperComponent;
  let fixture: ComponentFixture<MetricsDashboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsDashboardWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsDashboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
