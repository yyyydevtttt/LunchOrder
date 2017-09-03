import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmotUpdateComponent } from './hotmot-update.component';

describe('HotmotUpdateComponent', () => {
  let component: HotmotUpdateComponent;
  let fixture: ComponentFixture<HotmotUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmotUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmotUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
