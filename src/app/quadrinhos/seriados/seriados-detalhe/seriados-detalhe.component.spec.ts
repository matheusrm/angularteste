import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriadosDetalheComponent } from './seriados-detalhe.component';

describe('SeriadosDetalheComponent', () => {
  let component: SeriadosDetalheComponent;
  let fixture: ComponentFixture<SeriadosDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriadosDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriadosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
