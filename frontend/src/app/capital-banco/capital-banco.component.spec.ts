import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalBancoComponent } from './capital-banco.component';

describe('CapitalBancoComponent', () => {
  let component: CapitalBancoComponent;
  let fixture: ComponentFixture<CapitalBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
