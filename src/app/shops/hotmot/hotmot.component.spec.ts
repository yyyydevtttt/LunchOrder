import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmotComponent } from './hotmot.component';

describe('HotmotComponent', () => {
  let component: HotmotComponent;
  let fixture: ComponentFixture<HotmotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
