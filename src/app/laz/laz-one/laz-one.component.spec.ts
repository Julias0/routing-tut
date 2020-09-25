import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazOneComponent } from './laz-one.component';

describe('LazOneComponent', () => {
  let component: LazOneComponent;
  let fixture: ComponentFixture<LazOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
