import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionviewComponent } from './optionview.component';

describe('OptionviewComponent', () => {
  let component: OptionviewComponent;
  let fixture: ComponentFixture<OptionviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
