import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsettingcontentComponent } from './dashboardsettingcontent.component';

describe('DashboardsettingcontentComponent', () => {
  let component: DashboardsettingcontentComponent;
  let fixture: ComponentFixture<DashboardsettingcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardsettingcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsettingcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
