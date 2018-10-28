import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuneAdosComponent } from './jeune-ados.component';

describe('JeuneAdosComponent', () => {
  let component: JeuneAdosComponent;
  let fixture: ComponentFixture<JeuneAdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuneAdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuneAdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
