import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarQuadrinhoComponent } from './adicionar-quadrinho.component';

describe('AdicionarQuadrinhoComponent', () => {
  let component: AdicionarQuadrinhoComponent;
  let fixture: ComponentFixture<AdicionarQuadrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarQuadrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarQuadrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
