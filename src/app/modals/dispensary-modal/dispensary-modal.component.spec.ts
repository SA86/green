import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaryModalComponent } from './dispensary-modal.component';

describe('DispensaryModalComponent', () => {
  let component: DispensaryModalComponent;
  let fixture: ComponentFixture<DispensaryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispensaryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
