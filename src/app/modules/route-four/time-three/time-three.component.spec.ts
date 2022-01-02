import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeThreeComponent } from './time-three.component';

describe('TimeThreeComponent', () => {
  let component: TimeThreeComponent;
  let fixture: ComponentFixture<TimeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
