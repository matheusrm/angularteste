import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDoisComponent } from './header-dois.component';

describe('HeaderDoisComponent', () => {
  let component: HeaderDoisComponent;
  let fixture: ComponentFixture<HeaderDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
