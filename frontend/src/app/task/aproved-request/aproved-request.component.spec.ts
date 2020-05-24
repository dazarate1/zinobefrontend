import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovedRequestComponent } from './aproved-request.component';

describe('AprovedRequestComponent', () => {
  let component: AprovedRequestComponent;
  let fixture: ComponentFixture<AprovedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
