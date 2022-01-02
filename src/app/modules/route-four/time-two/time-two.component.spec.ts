import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTwoComponent } from './time-two.component';

describe('TimeTwoComponent', () => {
  let component: TimeTwoComponent;
  let fixture: ComponentFixture<TimeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
