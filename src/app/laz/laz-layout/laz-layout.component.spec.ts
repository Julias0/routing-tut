import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazLayoutComponent } from './laz-layout.component';

describe('LazLayoutComponent', () => {
  let component: LazLayoutComponent;
  let fixture: ComponentFixture<LazLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
