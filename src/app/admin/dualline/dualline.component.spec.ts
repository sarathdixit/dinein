import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuallineComponent } from './dualline.component';

describe('DuallineComponent', () => {
  let component: DuallineComponent;
  let fixture: ComponentFixture<DuallineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuallineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuallineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
