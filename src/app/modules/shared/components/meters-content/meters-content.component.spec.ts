import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetersContentComponent } from './meters-content.component';

describe('MetersContentComponent', () => {
  let component: MetersContentComponent;
  let fixture: ComponentFixture<MetersContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetersContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
