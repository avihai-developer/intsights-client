import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStatisticsComponent } from './web-statistic.component';

describe('WebStatisticComponent', () => {
  let component: WebStatisticsComponent;
  let fixture: ComponentFixture<WebStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
