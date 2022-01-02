import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFourComponent } from './time-four.component';

describe('TimeFourComponent', () => {
  let component: TimeFourComponent;
  let fixture: ComponentFixture<TimeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
