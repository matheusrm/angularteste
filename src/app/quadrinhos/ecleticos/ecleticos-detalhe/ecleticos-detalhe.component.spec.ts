import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcleticosDetalheComponent } from './ecleticos-detalhe.component';

describe('EcleticosDetalheComponent', () => {
  let component: EcleticosDetalheComponent;
  let fixture: ComponentFixture<EcleticosDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcleticosDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcleticosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
