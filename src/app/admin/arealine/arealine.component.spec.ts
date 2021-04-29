import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArealineComponent } from './arealine.component';

describe('ArealineComponent', () => {
  let component: ArealineComponent;
  let fixture: ComponentFixture<ArealineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArealineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArealineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
