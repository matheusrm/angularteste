import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcleticosItemComponent } from './ecleticos-item.component';

describe('EcleticosItemComponent', () => {
  let component: EcleticosItemComponent;
  let fixture: ComponentFixture<EcleticosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcleticosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcleticosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
