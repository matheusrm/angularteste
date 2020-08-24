import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarSeriadoComponent } from './adicionar-seriado.component';

describe('AdicionarSeriadoComponent', () => {
  let component: AdicionarSeriadoComponent;
  let fixture: ComponentFixture<AdicionarSeriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarSeriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarSeriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
