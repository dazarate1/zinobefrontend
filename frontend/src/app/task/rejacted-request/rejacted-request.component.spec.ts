import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejactedRequestComponent } from './rejacted-request.component';

describe('RejactedRequestComponent', () => {
  let component: RejactedRequestComponent;
  let fixture: ComponentFixture<RejactedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejactedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejactedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
