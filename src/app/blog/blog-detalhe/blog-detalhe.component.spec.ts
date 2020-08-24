import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetalheComponent } from './blog-detalhe.component';

describe('BlogDetalheComponent', () => {
  let component: BlogDetalheComponent;
  let fixture: ComponentFixture<BlogDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
