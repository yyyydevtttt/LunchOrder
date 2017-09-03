import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmotInputComponent } from './hotmot-input.component';

describe('HotmotInputComponent', () => {
  let component: HotmotInputComponent;
  let fixture: ComponentFixture<HotmotInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmotInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmotInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
