import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GattsuriComponent } from './gattsuri.component';

describe('GattsuriComponent', () => {
  let component: GattsuriComponent;
  let fixture: ComponentFixture<GattsuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GattsuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GattsuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
