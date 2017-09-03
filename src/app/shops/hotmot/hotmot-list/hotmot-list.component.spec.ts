import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotmotListComponent } from './hotmot-list.component';

describe('HotmotListComponent', () => {
  let component: HotmotListComponent;
  let fixture: ComponentFixture<HotmotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotmotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotmotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
