import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterWithLabelComponent } from './meter-with-label.component';

describe('MeterWithLabelComponent', () => {
  let component: MeterWithLabelComponent;
  let fixture: ComponentFixture<MeterWithLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeterWithLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
