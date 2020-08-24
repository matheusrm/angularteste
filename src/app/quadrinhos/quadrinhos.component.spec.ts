import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrinhosComponent } from './quadrinhos.component';

describe('QuadrinhosComponent', () => {
  let component: QuadrinhosComponent;
  let fixture: ComponentFixture<QuadrinhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadrinhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
