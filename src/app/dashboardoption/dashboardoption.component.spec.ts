import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardoptionComponent } from './dashboardoption.component';

describe('DashboardoptionComponent', () => {
  let component: DashboardoptionComponent;
  let fixture: ComponentFixture<DashboardoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
