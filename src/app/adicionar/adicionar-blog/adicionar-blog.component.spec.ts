import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarBlogComponent } from './adicionar-blog.component';

describe('AdicionarBlogComponent', () => {
  let component: AdicionarBlogComponent;
  let fixture: ComponentFixture<AdicionarBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
