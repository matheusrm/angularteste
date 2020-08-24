import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriadosComponent } from './seriados.component';

describe('SeriadosComponent', () => {
  let component: SeriadosComponent;
  let fixture: ComponentFixture<SeriadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
