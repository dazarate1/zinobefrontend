import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueMinMaxComponent } from './value-min-max.component';

describe('ValueMinMaxComponent', () => {
  let component: ValueMinMaxComponent;
  let fixture: ComponentFixture<ValueMinMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueMinMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueMinMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
