import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOnEtsyComponent } from './sell-on-etsy.component';

describe('SellOnEtsyComponent', () => {
  let component: SellOnEtsyComponent;
  let fixture: ComponentFixture<SellOnEtsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellOnEtsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellOnEtsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
