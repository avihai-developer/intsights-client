import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutContentComponent } from './donut-content.component';

describe('DonutContentComponent', () => {
  let component: DonutContentComponent;
  let fixture: ComponentFixture<DonutContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
