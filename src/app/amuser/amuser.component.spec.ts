import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmuserComponent } from './amuser.component';

describe('AmuserComponent', () => {
  let component: AmuserComponent;
  let fixture: ComponentFixture<AmuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
