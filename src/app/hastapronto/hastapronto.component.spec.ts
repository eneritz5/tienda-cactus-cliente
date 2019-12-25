import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HastaprontoComponent } from './hastapronto.component';

describe('HastaprontoComponent', () => {
  let component: HastaprontoComponent;
  let fixture: ComponentFixture<HastaprontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastaprontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HastaprontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
