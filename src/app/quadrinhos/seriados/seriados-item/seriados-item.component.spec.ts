import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriadosItemComponent } from './seriados-item.component';

describe('SeriadosItemComponent', () => {
  let component: SeriadosItemComponent;
  let fixture: ComponentFixture<SeriadosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriadosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriadosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
