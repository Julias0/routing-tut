import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazTwoComponent } from './laz-two.component';

describe('LazTwoComponent', () => {
  let component: LazTwoComponent;
  let fixture: ComponentFixture<LazTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
