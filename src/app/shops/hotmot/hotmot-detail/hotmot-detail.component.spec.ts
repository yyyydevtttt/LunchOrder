import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmotDetailComponent } from './hotmot-detail.component';

describe('HotmotDetailComponent', () => {
  let component: HotmotDetailComponent;
  let fixture: ComponentFixture<HotmotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
