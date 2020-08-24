import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcleticosComponent } from './ecleticos.component';

describe('EcleticosComponent', () => {
  let component: EcleticosComponent;
  let fixture: ComponentFixture<EcleticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcleticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcleticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
