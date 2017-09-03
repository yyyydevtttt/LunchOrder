import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmotConfirmComponent } from './hotmot-confirm.component';

describe('HotmotConfirmComponent', () => {
  let component: HotmotConfirmComponent;
  let fixture: ComponentFixture<HotmotConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmotConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmotConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
