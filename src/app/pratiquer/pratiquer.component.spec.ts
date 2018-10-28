import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratiquerComponent } from './pratiquer.component';

describe('PratiquerComponent', () => {
  let component: PratiquerComponent;
  let fixture: ComponentFixture<PratiquerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratiquerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratiquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
