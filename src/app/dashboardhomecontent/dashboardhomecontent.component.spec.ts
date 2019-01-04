import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardhomecontentComponent } from './dashboardhomecontent.component';

describe('DashboardhomecontentComponent', () => {
  let component: DashboardhomecontentComponent;
  let fixture: ComponentFixture<DashboardhomecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardhomecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardhomecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
