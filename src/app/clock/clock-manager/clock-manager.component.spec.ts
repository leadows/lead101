import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockManagerComponent } from './clock-manager.component';

describe('ClockManagerComponent', () => {
  let component: ClockManagerComponent;
  let fixture: ComponentFixture<ClockManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
